/** Represents a cube. Must be ordered for identification with parse and stringify */
interface Cube {
  xStart: number;
  xStop: number;
  yStart: number;
  yStop: number;
  zStart: number;
  zStop: number;
}

const reboot = (rebootSteps: [number, Cube][]): number => {
  const cubes: Map<string, number> = new Map();
  for (const [currentSign, currentCube] of rebootSteps) {
    const updatedCubes: Map<string, number> = new Map();
    for (const [previousKey, previousSign] of cubes) {
      const previousCube = JSON.parse(previousKey);
      const intersectingCube = {
        xStart: Math.max(currentCube.xStart, previousCube.xStart),
        xStop: Math.min(currentCube.xStop, previousCube.xStop),
        yStart: Math.max(currentCube.yStart, previousCube.yStart),
        yStop: Math.min(currentCube.yStop, previousCube.yStop),
        zStart: Math.max(currentCube.zStart, previousCube.zStart),
        zStop: Math.min(currentCube.zStop, previousCube.zStop),
      };
      if (
        intersectingCube.xStart <= intersectingCube.xStop &&
        intersectingCube.yStart <= intersectingCube.yStop &&
        intersectingCube.zStart <= intersectingCube.zStop
      ) {
        const key = JSON.stringify(intersectingCube);
        const sign = updatedCubes.get(key) ?? 0;
        updatedCubes.set(key, sign - previousSign);
      }
    }
    if (currentSign > 0) {
      const key = JSON.stringify(currentCube);
      const sign = updatedCubes.get(key) ?? 0;
      updatedCubes.set(key, sign + currentSign);
    }
    for (const [key, updatedSign] of updatedCubes) {
      const previousSign = cubes.get(key) ?? 0;
      const sign = previousSign + updatedSign;
      if (sign === 0) {
        cubes.delete(key);
      } else {
        cubes.set(key, sign);
      }
    }
  }
  return [...cubes].reduce((sum, [key, sign]) => {
    const cube = JSON.parse(key);
    return sum + sign *
        (cube.xStop - cube.xStart + 1) *
        (cube.yStop - cube.yStart + 1) *
        (cube.zStop - cube.zStart + 1);
  }, 0);
};

export function part1(input: string): number {
  const rebootSteps = input
    .split("\n")
    .map((line): [number, Cube] => {
      const sign = line.startsWith("on") ? 1 : -1;
      const [, x0, x1] = line.match(/x=(-?\d+)..(-?\d+)/)!;
      const [, y0, y1] = line.match(/y=(-?\d+)..(-?\d+)/)!;
      const [, z0, z1] = line.match(/z=(-?\d+)..(-?\d+)/)!;
      return [
        sign,
        {
          xStart: Math.max(+x0, -50),
          xStop: Math.min(+x1, 50),
          yStart: Math.max(+y0, -50),
          yStop: Math.min(+y1, 50),
          zStart: Math.max(+z0, -50),
          zStop: Math.min(+z1, 50),
        },
      ];
    })
    .filter(([, cube]) => (
      cube.xStart <= cube.xStop &&
      cube.yStart <= cube.yStop &&
      cube.zStart <= cube.zStop
    ));
  return reboot(rebootSteps);
}

export function part2(input: string): number {
  const rebootSteps = input
    .split("\n")
    .map((line): [number, Cube] => {
      const sign = line.startsWith("on") ? 1 : -1;
      const [, x0, x1] = line.match(/x=(-?\d+)..(-?\d+)/)!;
      const [, y0, y1] = line.match(/y=(-?\d+)..(-?\d+)/)!;
      const [, z0, z1] = line.match(/z=(-?\d+)..(-?\d+)/)!;
      return [
        sign,
        {
          xStart: +x0,
          xStop: +x1,
          yStart: +y0,
          yStop: +y1,
          zStart: +z0,
          zStop: +z1,
        },
      ];
    });
  return reboot(rebootSteps);
}
