import { zip } from "../deps.ts";

type Rule = [string, number, number, number, number];

/** Returns rules, your ticket, and nearby tickets from `input` */
const processInput = (input: string): [Rule[], number[], number[][]] => {
  const [rules, yourTicket, nearbyTickets] = input.split("\n\n");
  return [
    rules.split("\n").map((line): Rule => {
      const [field, ranges] = line.split(": ");
      const [[lo1], [hi1], [lo2], [hi2]] = ranges.matchAll(/\d+/g);
      return [field, +lo1, +hi1, +lo2, +hi2];
    }),
    yourTicket.substr(13).split(",").map(Number),
    nearbyTickets
      .substr(16)
      .split("\n")
      .map((ticket) => ticket.split(",").map(Number)),
  ];
};

/** Returns a memoized function that returns which rules are valid for a value */
const validRulesFactory = (rules: Rule[]): (value: number) => string[] => {
  const memo: string[][] = [];
  const isValid = (value: number) => {
    return memo[value] ??= rules
      .filter(([, lo1, hi1, lo2, hi2]) =>
        lo1 <= value && value <= hi1 || lo2 <= value && value <= hi2
      )
      .map(([name]) => name);
  };
  return isValid;
};

/** Returns the intersection of multiple `Array`s */
const intersection = (sets: string[][]): Set<string> => {
  const setsIntersection = new Set(sets[0]);
  for (let i = 1; i < sets.length; i++) {
    for (const field of setsIntersection) {
      if (!sets[i].includes(field)) {
        setsIntersection.delete(field);
      }
    }
  }
  return setsIntersection;
};

export function part1(input: string): number {
  const [rules, , nearbyTickets] = processInput(input);
  const getValidRules = validRulesFactory(rules);
  let ticketScanningErrorRate = 0;
  for (const nearbyTicket of nearbyTickets) {
    for (const value of nearbyTicket) {
      if (!getValidRules(value).length) {
        ticketScanningErrorRate += value;
      }
    }
  }
  return ticketScanningErrorRate;
}

export function part2(input: string): number {
  const [rules, yourTicket, nearbyTickets] = processInput(input);
  const getValidRules = validRulesFactory(rules);
  const orderedFields: string[] = [];
  const fields = nearbyTickets
    .map((nearbyTicket) => nearbyTicket.map((value) => getValidRules(value)))
    .filter((validRules) => validRules.every(({ length }) => !!length));
  zip(...fields)
    .map((sets, index): [Set<string>, number] => [intersection(sets), index])
    .sort(([setA], [setB]) => setA.size - setB.size)
    .forEach(([set, i]) => {
      for (const field of set) {
        if (!orderedFields.includes(field)) {
          orderedFields[i] = field;
          break;
        }
      }
    });
  return orderedFields
    .map((field, i): [string, number] => [field, i])
    .filter(([field]) => field?.startsWith("departure"))
    .reduce((product, [, i]) => product * yourTicket[i], 1);
}
