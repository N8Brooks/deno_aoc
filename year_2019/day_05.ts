export function runProgram(input: string, value = NaN): number {
  const positions = input.split(",").map((d) => +d);
  let i = 0, output = NaN;
  while (positions[i] !== 99) {
    const a = positions[i] % 1_000 >= 100
      ? positions[i + 1]
      : positions[positions[i + 1]];
    const b = positions[i] % 10_000 >= 1_000
      ? positions[i + 2]
      : positions[positions[i + 2]];
    switch (positions[i] % 100) {
      case 1:
        positions[positions[i + 3]] = a + b;
        i += 4;
        break;
      case 2:
        positions[positions[i + 3]] = a * b;
        i += 4;
        break;
      case 3:
        positions[positions[i + 3]] = value;
        i += 2;
        break;
      case 4:
        output = a;
        i += 2;
        break;
      case 5:
        i = a ? b : i + 3;
        break;
      case 6:
        i = a ? i + 3 : b;
        break;
      case 7:
        positions[positions[i + 3]] = +(a < b);
        i += 4;
        break;
      case 8:
        positions[positions[i + 3]] = +(a === b);
        i += 4;
        break;
      default:
        throw Error;
    }
  }
  return output;
}

export function part1(input: string, value = 1): number {
  return runProgram(input, value);
}

export function part2(input: string, value = 5): number {
  return runProgram(input, value);
}
