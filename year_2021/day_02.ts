export function part1(input: string): number {
  let horizontalPosition = 0;
  let depth = 0;

  for (const instruction of input.split("\n")) {
    const [command, units] = instruction.split(" ");
    if (command === "forward") {
      horizontalPosition += +units;
    } else {
      depth += command === "down" ? +units : -units;
    }
  }

  return horizontalPosition * depth;
}

export function part2(input: string): number {
  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;

  for (const instruction of input.split("\n")) {
    const [command, units] = instruction.split(" ");
    if (command === "forward") {
      horizontalPosition += +units;
      depth += aim * +units;
    } else {
      aim += command === "down" ? +units : -units;
    }
  }

  return horizontalPosition * depth;
}
