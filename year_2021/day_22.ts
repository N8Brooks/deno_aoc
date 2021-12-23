/** Represents a cube */
interface Cube {
  xStart: number;
  xStop: number;
  yStart: number;
  yStop: number;
  zStart: number;
  zStop: number;
}

const intersectingVolume = (currentCube: Cube, cubes: Cube[]): number => {
  let volume = 0;
  cubes.forEach((previousCube, i) => {
    const xStart = Math.max(currentCube.xStart, previousCube.xStart);
    const xStop = Math.min(currentCube.xStop, previousCube.xStop);
    if (xStop < xStart) {
      return;
    }
    const yStart = Math.max(currentCube.yStart, previousCube.yStart);
    const yStop = Math.min(currentCube.yStop, previousCube.yStop);
    if (yStop < yStart) {
      return;
    }
    const zStart = Math.max(currentCube.zStart, previousCube.zStart);
    const zStop = Math.min(currentCube.zStop, previousCube.zStop);
    if (zStop < zStart) {
      return;
    }
    const intersectingCube = { xStart, xStop, yStart, yStop, zStart, zStop };
    volume +=
      (xStop - xStart + 1) * (yStop - yStart + 1) * (zStop - zStart + 1) -
      intersectingVolume(intersectingCube, cubes.slice(i + 1));
  });
  return volume;
};

const reboot = (rebootSteps: [boolean, Cube][]): number => {
  let cubeOnCount = 0;
  const cubes: Cube[] = [];
  for (const [on, cube] of rebootSteps.reverse()) {
    if (on) {
      const volume = (cube.xStop - cube.xStart + 1) *
        (cube.yStop - cube.yStart + 1) *
        (cube.zStop - cube.zStart + 1);
      const overlap = intersectingVolume(cube, cubes);
      cubeOnCount += volume - overlap;
    }
    cubes.push(cube);
  }
  return cubeOnCount;
};

export function part1(input: string): number {
  const rebootSteps = input
    .split("\n")
    .map((line): [boolean, Cube] => {
      const sign = line.startsWith("on");
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
    .map((line): [boolean, Cube] => {
      const sign = line.startsWith("on");
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
