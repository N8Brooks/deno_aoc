const CLOSING_CHARS: Record<string, string> = {
  "(": ")",
  "[": "]",
  "{": "}",
  "<": ">",
};

const POINTS_PART_1: Record<string, number> = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

const POINTS_PART_2: Record<string, number> = {
  "(": 1,
  "[": 2,
  "{": 3,
  "<": 4,
};

export function part1(input: string): number {
  let score = 0;
  for (const line of input.split("\n")) {
    const stack: string[] = [];
    for (const char of line) {
      if (char in CLOSING_CHARS) {
        stack.push(char);
      } else if (char !== CLOSING_CHARS[stack.pop()!]) {
        score += POINTS_PART_1[char];
        break;
      }
    }
  }
  return score;
}

export function part2(input: string): number {
  const scores = [];
  for (const line of input.split("\n")) {
    const stack: string[] = [];
    loop: {
      for (const char of line) {
        if (char in CLOSING_CHARS) {
          stack.push(char);
        } else if (char !== CLOSING_CHARS[stack.pop()!]) {
          break loop;
        }
      }
      scores.push(
        stack.reduceRight((score, char) => 5 * score + POINTS_PART_2[char], 0),
      );
    }
  }
  return scores.sort((a, b) => a - b)[Math.floor(scores.length / 2)];
}
