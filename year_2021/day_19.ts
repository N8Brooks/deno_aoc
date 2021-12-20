import {
  combinations,
  permutations,
  permutationsWithReplacement,
  zip,
} from "../deps.ts";

const add = ([x0, y0, z0]: number[], [x1, y1, z1]: number[]): number[] => {
  return [x0 + x1, y0 + y1, z0 + z1];
};

const multiply = ([x0, y0, z0]: number[], [x1, y1, z1]: number[]): number[] => {
  return [x0 * x1, y0 * y1, z0 * z1];
};

const subtract = ([x0, y0, z0]: number[], [x1, y1, z1]: number[]): number[] => {
  return [x0 - x1, y0 - y1, z0 - z1];
};

export function locateBeaconsAndScanners(input: string) {
  const scanners = input
    .split("\n\n")
    .map((scanner) => {
      const [, ...beacons] = scanner.split("\n");
      const coordinates = beacons.map((beacon) =>
        beacon.split(",").map((d) => +d)
      );
      return zip(...coordinates);
    });

  const scannerLocations = [[0, 0, 0]];
  const primaryAxesA = scanners.shift()!;
  const primaryCoordinatesA = new Map(
    zip(...primaryAxesA).map(
      (coordinates) => [coordinates.join(), coordinates],
    ),
  );

  while (scanners.length) {
    const secondaryAxesA = scanners.shift()!;
    loop: {
      for (const primaryOrigin of primaryCoordinatesA.values()) {
        const primaryCoordinatesB: Map<string, number[]> = new Map();
        for (const originalCoordinates of primaryCoordinatesA.values()) {
          const coordinates = subtract(originalCoordinates, primaryOrigin);
          const key = coordinates.join();
          primaryCoordinatesB.set(key, coordinates);
        }
        for (const polarities of permutationsWithReplacement([-1, 1], 3)) {
          for (const secondaryAxesB of permutations(secondaryAxesA)) {
            const secondaryCoordinatesA = zip(...secondaryAxesB).map(
              (coordinates) => multiply(coordinates, polarities),
            );
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
              for (const coordinates0 of secondaryCoordinatesB.values()) {
                const coordinates1 = add(coordinates0, primaryOrigin);
                const key = coordinates1.join();
                primaryCoordinatesA.set(key, coordinates1);
              }
              break loop;
            }
          }
        }
      }
      scanners.push(secondaryAxesA);
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
