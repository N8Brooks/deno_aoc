import { modularInverse } from "../util.ts";

export function part1(input: string): number {
  const [notes, schedule] = input.split("\n");
  const timeZero = +notes;
  let minBus = 0;
  let minTime = Infinity;
  schedule
    .split(",")
    .filter((bus) => bus !== "x")
    .map(Number)
    .forEach((bus) => {
      const remainder = (bus - timeZero) % bus;
      const time = (remainder + bus) % bus;
      if (minTime > time) {
        minBus = bus;
        minTime = time;
      }
    });
  return minBus * minTime;
}

export function part2(input: string): number {
  let time = 0;
  let lcm = 1;
  input
    .split("\n")[1]
    .split(",")
    .map((bus, i) => [parseInt(bus), i])
    .filter(([bus]) => !isNaN(bus))
    .forEach(([bus, i]) => {
      const inverted = (time + i) * modularInverse(lcm, bus);
      const quotient = bus * Math.ceil(inverted / bus) - inverted;
      const remainder = quotient % bus;
      time += remainder * lcm;
      lcm *= bus;
    });
  return time;
}
