import { slidingWindows } from "../deps.ts";

/** Return the difference between the most and least polymer counts after n `steps` */
const polymerDifference = (input: string, steps: number): number => {
  const [template, pairInsertions] = input.split("\n\n");
  const rules = pairInsertions
    .split("\n")
    .map((line) => [line[0], line[1], line[6]]);
  const emptyPairCounts = Object.fromEntries(
    rules.map(([a, b]) => [`${a}${b}`, 0]),
  );
  let pairCounts = { ...emptyPairCounts };
  slidingWindows(template.split(""), 2).forEach((pair) => {
    pairCounts[pair.join("")]++;
  });
  for (let step = 0; step < steps; step++) {
    const nextPairCounts = { ...emptyPairCounts };
    for (const [a, b, c] of rules) {
      nextPairCounts[`${a}${c}`] += pairCounts[`${a}${b}`];
      nextPairCounts[`${c}${b}`] += pairCounts[`${a}${b}`];
    }
    pairCounts = nextPairCounts;
  }
  const chars = [...new Set(rules.flat())];
  const charCounts = Object.fromEntries(chars.map((char) => [char, 0]));
  charCounts[template[0]] = 1;
  for (const [pair, count] of Object.entries(pairCounts)) {
    charCounts[pair[1]] += count;
  }
  const counts = Object.values(charCounts);
  return Math.max(...counts) - Math.min(...counts);
};

export function part1(input: string): number {
  return polymerDifference(input, 10);
}

export function part2(input: string): number {
  return polymerDifference(input, 40);
}
