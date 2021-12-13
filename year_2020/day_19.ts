type Rule = string | number[][];

const parseRulesInput = (rulesInput: string): Rule[] => {
  const extras: [number, Rule][] = [];
  const rules = rulesInput
    .split("\n")
    .map((line): [number, string | number[][]] => {
      const [key, criteria] = line.split(": ");
      const value = '"' === criteria[0]
        ? criteria[1]
        : criteria.split(" | ").map((and) => and.split(" ").map((d) => +d));
      return [+key, value];
    })
    .sort(([a], [b]) => a - b)
    .filter(([i, rule], j) => {
      if (i === j) {
        return true;
      }
      extras.push([i, rule]);
      return false;
    })
    .map(([, rule]) => rule);
  for (const [i, rule] of extras) {
    rules[i] = rule;
  }
  return rules;
};

const isValidFactory = (rules: Rule[]): (message: string) => boolean => {
  const isValid = (message: string, sequence?: number[]): boolean => {
    sequence ??= [0];
    if (message === "" || sequence.length === 0) {
      return message === "" && sequence.length === 0;
    }
    const element = sequence[0];
    const rule = rules[element];
    if (typeof rule === "string") {
      return rule === message[0]
        ? isValid(message.substr(1), sequence.slice(1))
        : false;
    } else {
      return rule.some((and) =>
        isValid(message, [...and, ...sequence!.slice(1)])
      );
    }
  };

  return isValid;
};

export function part1(input: string): number {
  const [rulesInput, messages] = input.split("\n\n");
  const rules = parseRulesInput(rulesInput);
  const isValid = isValidFactory(rules);
  let validCount = 0;
  for (const message of messages.split("\n")) {
    if (isValid(message)) {
      validCount++;
    }
  }
  return validCount;
}

export function part2(input: string): number {
  const [rulesInput, messages] = input.split("\n\n");
  const rules = parseRulesInput(rulesInput);
  rules[8] = [[42], [42, 8]];
  rules[11] = [[42, 31], [42, 11, 31]];
  const isValid = isValidFactory(rules);
  let validCount = 0;
  for (const message of messages.split("\n")) {
    if (isValid(message)) {
      validCount++;
    }
  }
  return validCount;
}
