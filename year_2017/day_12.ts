const parseGroups = (input: string): number[] => {
  const groups: number[] = [];
  const find = (x: number): number => {
    const groupX = groups[x] ??= x;
    return groupX === x ? x : find(groupX);
  };
  for (const line of input.split("\n")) {
    const [a, bs] = line.split(" <-> ");
    const groupA = find(+a);
    for (const b of bs.split(", ")) {
      const groupB = find(+b);
      groups[groupB] = groupA;
    }
  }
  return groups.map((x) => find(x));
};

export function part1(input: string): number {
  const groups = parseGroups(input);
  let group0Count = 0;
  for (const group of groups) {
    if (group === groups[0]) {
      group0Count++;
    }
  }
  return group0Count;
}

export function part2(input: string): number {
  return new Set(parseGroups(input)).size;
}
