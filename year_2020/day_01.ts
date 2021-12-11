export function part1(input: string): number {
  const seen: boolean[] = [];
  for (const x of input.split("\n").map(Number)) {
    if (2020 - x in seen) {
      return (2020 - x) * x;
    } else {
      seen[x] = true;
    }
  }
  throw Error("no sum of 2020 was found.");
}

export function part2(input: string): number {
  const ones: boolean[] = [];
  const twos: [number, number][] = [];

  for (const x of input.split("\n").map(Number)) {
    if (2020 - x in twos) {
      const [y, z] = twos[2020 - x];
      return x * y * z;
    }
    for (let y = 0; y < 2020 - x; y++) {
      if (ones[y] && !(x + y in twos)) {
        twos[x + y] = [x, y];
      }
    }
    ones[x] = true;
  }

  throw Error("no sum of 2020 was found.");
}
