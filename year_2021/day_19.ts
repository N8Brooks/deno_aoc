import { combinations, zip } from "../deps.ts";

const add = ([x0, y0, z0]: number[], [x1, y1, z1]: number[]): number[] => {
  return [x0 + x1, y0 + y1, z0 + z1];
};

const subtract = ([x0, y0, z0]: number[], [x1, y1, z1]: number[]): number[] => {
  return [x0 - x1, y0 - y1, z0 - z1];
};

function* rotations([xs, ys, zs]: number[][]): Generator<number[][]> {
  const nx = xs.map((element) => -element);
  const ny = ys.map((element) => -element);
  const nz = zs.map((element) => -element);
  yield [xs, ys, zs];
  yield [ys, zs, xs];
  yield [zs, xs, ys];
  yield [zs, ys, nx];
  yield [ys, xs, nz];
  yield [xs, zs, ny];
  yield [xs, ny, nz];
  yield [ys, nz, nx];
  yield [zs, nx, ny];
  yield [zs, ny, xs];
  yield [ys, nx, zs];
  yield [xs, nz, ys];
  yield [nx, ys, nz];
  yield [ny, zs, nx];
  yield [nz, xs, ny];
  yield [nz, ys, xs];
  yield [ny, xs, zs];
  yield [nx, zs, ys];
  yield [nx, ny, zs];
  yield [ny, nz, xs];
  yield [nz, nx, ys];
  yield [nz, ny, nx];
  yield [ny, nx, nz];
  yield [nx, nz, ny];
}

const addFingerprint = (
  fingerprint: Map<number, number[]>,
  coordinates: Iterable<number[]>,
): void => {
  for (const [a, b] of combinations(coordinates, 2)) {
    const dx = Math.abs(a[0] - b[0]);
    const dy = Math.abs(a[1] - b[1]);
    const dz = Math.abs(a[2] - b[2]);
    fingerprint.set(dx * dx + dy * dy + dz * dz, a);
  }
};

export function locateBeaconsAndScanners(input: string) {
  const scanners = input
    .split("\n\n")
    .map((scanner) => {
      const [, ...beacons] = scanner.split("\n");
      const coordinates = beacons.map((beacon) =>
        beacon.split(",").map((d) => +d)
      );
      const fingerprint: Set<number> = new Set();
      for (const [[x0, y0, z0], [x1, y1, z1]] of combinations(coordinates, 2)) {
        const dx = Math.abs(x0 - x1);
        const dy = Math.abs(y0 - y1);
        const dz = Math.abs(z0 - z1);
        fingerprint.add(dx * dx + dy * dy + dz * dz);
      }
      return { axes: zip(...coordinates), fingerprint };
    });

  const scannerLocations = [[0, 0, 0]];
  const { axes: primaryAxesA } = scanners.shift()!;
  const primaryCoordinatesA = new Map(
    zip(...primaryAxesA).map((
      coordinates,
    ) => [coordinates.join(), coordinates]),
  );
  const primaryFingerprint: Map<number, number[]> = new Map();
  addFingerprint(primaryFingerprint, primaryCoordinatesA.values());

  while (scanners.length) {
    const {
      axes: secondaryAxesA,
      fingerprint: secondaryFingerprint,
    } = scanners.shift()!;

    const commonCoordinates = [];
    for (const key of secondaryFingerprint) {
      const value = primaryFingerprint.get(key);
      if (value) {
        commonCoordinates.push(value);
      }
    }

    if (commonCoordinates.length < 66) {
      scanners.push({
        axes: secondaryAxesA,
        fingerprint: secondaryFingerprint,
      });
      continue;
    }

    loop: {
      for (const primaryOrigin of commonCoordinates) {
        const primaryCoordinatesB: Map<string, number[]> = new Map();
        for (const originalCoordinates of primaryCoordinatesA.values()) {
          const coordinates = subtract(originalCoordinates, primaryOrigin);
          const key = coordinates.join();
          primaryCoordinatesB.set(key, coordinates);
        }
        for (const secondaryAxesB of rotations(secondaryAxesA)) {
          const secondaryCoordinatesA = zip(...secondaryAxesB);
          for (const secondaryOrigin of secondaryCoordinatesA) {
            let commonCoordinateCount = 0;
            const secondaryCoordinatesB: Map<string, number[]> = new Map();
            for (const originalCoordinates of secondaryCoordinatesA) {
              const coordinates = subtract(
                originalCoordinates,
                secondaryOrigin,
              );
              const key = coordinates.join();
              if (primaryCoordinatesB.has(key)) {
                commonCoordinateCount++;
              }
              secondaryCoordinatesB.set(key, coordinates);
            }
            if (commonCoordinateCount < 12) {
              continue;
            }
            scannerLocations.push(subtract(secondaryOrigin, primaryOrigin));
            const coordinates: number[][] = [];
            for (const coordinates0 of secondaryCoordinatesB.values()) {
              const coordinates1 = add(coordinates0, primaryOrigin);
              const key = coordinates1.join();
              primaryCoordinatesA.set(key, coordinates1);
              coordinates.push(coordinates1);
            }
            addFingerprint(primaryFingerprint, coordinates);
            break loop;
          }
        }
      }
      scanners.push({
        axes: secondaryAxesA,
        fingerprint: secondaryFingerprint,
      });
    }
  }

  return { scannerLocations, beaconLocations: primaryCoordinatesA };
}

export function part1(input: string): number {
  return locateBeaconsAndScanners(input).beaconLocations.size;
}

export function part2(input: string): number {
  const { scannerLocations } = locateBeaconsAndScanners(input);
  return Math.max(
    ...[...combinations(scannerLocations, 2)].map((
      [[x0, y0, z0], [x1, y1, z1]],
    ) => Math.abs(x0 - x1) + Math.abs(y0 - y1) + Math.abs(z0 - z1)),
  );
}
