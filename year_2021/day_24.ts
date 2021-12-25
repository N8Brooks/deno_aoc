interface Rule {
  /** First digit index of the model number */
  i: number;

  /** Second digit index of the model number */
  j: number;

  /** For a valid model number, this plus the first digit must equal second */
  addend: number;
}

/** Submarine model  number are always fourteen-digit numbers */
const MAX_MODEL_NUMBER_INDEX = 13;

/** Returns rules for a valid model number ordered by most significant digit */
const parseRules = (input: string): Rule[] => {
  const rules: Rule[] = [];
  const stack: [number, number][] = [];
  input
    .split("\ninp w")
    .map((block) => [...block.matchAll(/-?\d+/g)].map((d) => +d))
    .forEach(({ [2]: a, [3]: b, [9]: c }, j) => {
      if (a === 1) {
        stack.push([c, j]);
      } else {
        const [c, i] = stack.pop()!;
        const addend = b + c;
        rules.push({ i, j, addend });
      }
    });
  return rules.sort((a, b) => a.i - b.i);
};

export function part1(input: string): number {
  let modelNumber = 0;
  const rules = parseRules(input);
  for (const { i, j, addend } of rules) {
    const [a, b] = addend > 0 ? [9 - addend, 9] : [9, 9 + addend];
    modelNumber += a * 10 ** (MAX_MODEL_NUMBER_INDEX - i);
    modelNumber += b * 10 ** (MAX_MODEL_NUMBER_INDEX - j);
  }
  return modelNumber;
}

export function part2(input: string): number {
  let modelNumber = 0;
  const rules = parseRules(input);
  for (const { i, j, addend } of rules) {
    const [a, b] = addend > 0 ? [1, 1 + addend] : [1 - addend, 1];
    modelNumber += a * 10 ** (MAX_MODEL_NUMBER_INDEX - i);
    modelNumber += b * 10 ** (MAX_MODEL_NUMBER_INDEX - j);
  }
  return modelNumber;
}
