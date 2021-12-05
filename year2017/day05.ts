export function part1(input: string): number {
  const offsets = input.split("\n").map((x) => +x);
  let index = 0, jumps = 0;
  while (index < offsets.length) {
    index += offsets[index]++;
    jumps++;
  }
  return jumps;
}

export function part2(input: string): number {
  const offsets = input.split("\n").map((x) => +x);
  let index = 0, jumps = 0;
  while (index < offsets.length) {
    const offset = offsets[index];
    offsets[index] = offset >= 3 ? offset - 1 : offset + 1;
    index += offset;
    jumps++;
  }
  return jumps;
}
