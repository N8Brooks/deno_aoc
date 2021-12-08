import { permutations } from "../deps.ts";

const EASY_DIGIT_LENGTHS = [2, 3, 4, 7];

export function part1(input: string): number {
  return input
    .split("\n")
    .map((line) => line.split(" | ")[1])
    .reduce((count, signalPatterns) => {
      for (const { length } of signalPatterns.split(" ")) {
        if (EASY_DIGIT_LENGTHS.includes(length)) {
          count++;
        }
      }
      return count;
    }, 0);
}

const CHAR_CODES = "abcdefg".split("").map((char) => char.charCodeAt(0));

const keyFromCharCodes = (...chars: number[]): string => {
  return chars.sort((a, b) => a - b).join();
};

const mapKeysToDigits = (
  [a, b, c, d, e, f, g]: number[],
): Record<string, number> => {
  return {
    [keyFromCharCodes(a, b, c, e, f, g)]: 0,
    [keyFromCharCodes(c, f)]: 1,
    [keyFromCharCodes(a, c, d, e, g)]: 2,
    [keyFromCharCodes(a, c, d, f, g)]: 3,
    [keyFromCharCodes(b, c, d, f)]: 4,
    [keyFromCharCodes(a, b, d, f, g)]: 5,
    [keyFromCharCodes(a, b, d, e, f, g)]: 6,
    [keyFromCharCodes(a, c, f)]: 7,
    [keyFromCharCodes(a, b, c, d, e, f, g)]: 8,
    [keyFromCharCodes(a, b, c, d, f, g)]: 9,
  };
};

const keyFromChars = (chars: string): string => {
  return chars
    .split("")
    .map((char) => char.charCodeAt(0))
    .sort((a, b) => a - b)
    .join();
};

export function part2(input: string): number {
  let outputValuesTotal = 0;
  for (const line of input.split("\n")) {
    const [inputs, outputs] = line.split(" | ").map((part) => part.split(" "));
    for (const permutation of permutations(CHAR_CODES)) {
      const keyToDigits = mapKeysToDigits(permutation);
      if (inputs.some((chars) => !(keyFromChars(chars) in keyToDigits))) {
        continue;
      }
      outputValuesTotal += +outputs
        .map((chars) => keyFromChars(chars))
        .map((key) => keyToDigits[key])
        .join("");
      break;
    }
  }
  return outputValuesTotal;
}
