import { slidingWindows } from "https://deno.land/std/collections/mod.ts";

const vowels = new Set(["a", "e", "i", "o", "u"]);

const noneOfThese = new Map([
  ["a", "b"],
  ["c", "d"],
  ["p", "q"],
  ["x", "y"],
]);

export function part1(data: string): number {
  let nice = 0;
  for (const word of data.trimEnd().split("\n")) {
    if (isNice(word)) {
      nice += 1;
    }
  }
  return nice;

  function isNice(word: string): boolean {
    let vowelCount = 0;
    let letterTwice = false;
    let previousChar = "";
    for (const currentChar of word) {
      if (noneOfThese.get(previousChar) === currentChar) {
        return false;
      }
      if (previousChar === currentChar) {
        letterTwice = true;
      }
      if (vowels.has(currentChar)) {
        vowelCount += 1;
      }
      previousChar = currentChar;
    }
    return vowelCount >= 3 && letterTwice;
  }
}

export function part2(data: string): number {
  let nice = 0;
  for (const word of data.trimEnd().split("\n")) {
    if (isNice(word)) {
      nice += 1;
    }
  }
  return nice;

  function isNice(word: string): boolean {
    const pairs: Set<string> = new Set();
    let paired = false;
    let split = false;
    for (const [a, b, c] of slidingWindows(word.split(""), 3)) {
      if (pairs.has(`${b}${c}`)) {
        if (split) {
          return true;
        } else {
          paired = true;
        }
      }
      if (a === c) {
        if (paired) {
          return true;
        } else {
          split = true;
        }
      }
      pairs.add(`${a}${b}`);
    }
    return false;
  }
}
