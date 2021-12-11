const pattern =
  /\w+ can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds./g;

export function part1(input: string, finishTime: number): number {
  let maxDistance = 0;
  for (const [, speed, flyTime, restTime] of input.matchAll(pattern)) {
    const distance = getDistance(finishTime, +speed, +flyTime, +restTime);
    maxDistance = Math.max(maxDistance, distance);
  }
  return maxDistance;
}

export function part2(input: string, finishTime: number): number {
  const reindeer = [...input.matchAll(pattern)]
    .map((line) => {
      const [, speed, flyTime, restTime] = line.map(Number);
      return { points: 0, speed, flyTime, restTime };
    });

  for (let i = 1; i <= finishTime; i++) {
    let maxIndices: number[] = [];
    let maxDistance = 0;
    reindeer.forEach(({ speed, flyTime, restTime }, index) => {
      const distance = getDistance(i, speed, flyTime, restTime);
      if (distance === maxDistance) {
        maxIndices.push(index);
      } else if (distance > maxDistance) {
        maxDistance = distance;
        maxIndices = [index];
      }
    });
    for (const index of maxIndices) {
      reindeer[index].points++;
    }
  }

  return Math.max(...reindeer.map(({ points }) => points));
}

function getDistance(
  time: number,
  speed: number,
  flyTime: number,
  restTime: number,
): number {
  const cycleTime = flyTime + restTime;
  const quotient = Math.floor(time / cycleTime);
  const remainder = time % cycleTime;
  const totalFlyingTime = flyTime * quotient +
    Math.min(remainder, flyTime);
  return speed * totalFlyingTime;
}
