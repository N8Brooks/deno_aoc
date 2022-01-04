import { multiplyComplex } from "../util.ts";

type Complex = [number, number];

const ROTATION: Complex[] = [
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
];

export function part1(input: string): number {
  const position: Complex = [0, 0];
  let direction: Complex = [1, 0];

  for (const line of input.split("\n")) {
    const num = +line.slice(1);
    switch (line[0]) {
      case "N":
        position[1] += num;
        break;
      case "E":
        position[0] += num;
        break;
      case "S":
        position[1] -= num;
        break;
      case "W":
        position[0] -= num;
        break;
      case "F":
        position[0] += num * direction[0];
        position[1] += num * direction[1];
        break;
      case "L":
        direction = multiplyComplex(direction, ROTATION[4 - num / 90 % 4]);
        break;
      case "R":
        direction = multiplyComplex(direction, ROTATION[num / 90 % 4]);
        break;
    }
  }

  return Math.abs(position[0]) + Math.abs(position[1]);
}

export function part2(input: string): number {
  const position: Complex = [0, 0];
  let waypoint: Complex = [10, 1];

  for (const line of input.split("\n")) {
    const num = +line.slice(1);
    switch (line[0]) {
      case "N":
        waypoint[1] += num;
        break;
      case "E":
        waypoint[0] += num;
        break;
      case "S":
        waypoint[1] -= num;
        break;
      case "W":
        waypoint[0] -= num;
        break;
      case "F":
        position[0] += num * waypoint[0];
        position[1] += num * waypoint[1];
        break;
      case "L":
        waypoint = multiplyComplex(waypoint, ROTATION[4 - num / 90 % 4]);
        break;
      case "R":
        waypoint = multiplyComplex(waypoint, ROTATION[num / 90 % 4]);
        break;
    }
  }

  return Math.abs(position[0]) + Math.abs(position[1]);
}
