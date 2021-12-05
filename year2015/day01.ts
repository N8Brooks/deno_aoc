export function part1(input: string): number {
  let count = 0;
  for (const char of input) {
    switch (char) {
      case "(":
        count += 1;
        break;
      case ")":
        count -= 1;
        break;
    }
  }
  return count;
}

export function part2(input: string): number {
  let floor = 0, position = 1;
  for (const char of input) {
    if (char === "(") {
      floor += 1;
    } else if (floor > 0) {
      floor -= 1;
    } else {
      return position;
    }
    position += 1;
  }
  throw Error("instructions do not lead to the basement");
}
