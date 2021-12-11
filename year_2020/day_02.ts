const pattern = /(\d+)-(\d+) ([a-z]): ([a-z]+)/g;

export function part1(input: string): number {
  let valid = 0;
  for (const [, lo, hi, char, password] of input.matchAll(pattern)) {
    const lowerBound = +lo, upperBound = +hi;
    let count = 0;
    for (const p of password) {
      if (char === p && upperBound === count++) {
        break;
      }
    }
    if (lowerBound <= count && count <= upperBound) {
      valid++;
    }
  }
  return valid;
}

export function part2(input: string): number {
  let valid = 0;
  for (const [, i, j, char, password] of input.matchAll(pattern)) {
    if ((password[+i - 1] === char) !== (password[+j - 1] === char)) {
      valid++;
    }
  }
  return valid;
}
