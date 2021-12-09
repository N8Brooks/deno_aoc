const vowels = new Set(["a", "e", "i", "o", "u"]);

const noneOfThese: Record<string, string> = {
  a: "b",
  c: "d",
  p: "q",
  x: "y",
};

const isNicePart1 = (word: string): boolean => {
  let vowelCount = 0;
  let letterTwice = false;
  let previousChar = "";
  for (const currentChar of word) {
    if (noneOfThese[previousChar] === currentChar) {
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
};

export function part1(input: string): number {
  let nice = 0;
  for (const word of input.split("\n")) {
    if (isNicePart1(word)) {
      nice += 1;
    }
  }
  return nice;
}

const isNicePart2 = (word: string): boolean => {
  const pairs: Set<string> = new Set();
  let paired = false;
  let split = false;
  let a = word[0], b = word[1];
  for (let i = 2; i < word.length; i++) {
    const c = word[i];
    if (pairs.has(`${b}${c}`)) {
      if (split) {
        return true;
      } else {
        paired = true;
      }
    }
    pairs.add(`${a}${b}`);
    if (a === c) {
      if (paired) {
        return true;
      } else {
        split = true;
      }
    }
    [a, b] = [b, c];
  }
  return false;
};

export function part2(input: string): number {
  let nice = 0;
  for (const word of input.split("\n")) {
    if (isNicePart2(word)) {
      nice++;
    }
  }
  return nice;
}
