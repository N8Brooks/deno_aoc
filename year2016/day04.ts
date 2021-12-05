const PATTERN = /([a-z\-]+)-(\d+)\[([a-z]+)\]/g;

const A_CHAR_CODE = "a".charCodeAt(0);

export function part1(input: string): number {
  let sum = 0;
  for (const [, encryptedName, sectorId, checksum] of input.matchAll(PATTERN)) {
    const counts = counter(encryptedName.replaceAll("-", ""));
    if (checksum === nMostCommon(counts, 5)) {
      sum = +sectorId + sum;
    }
  }
  return sum;
}

export function part2(input: string): number {
  for (const [, encryptedName, sectorId] of input.matchAll(PATTERN)) {
    const n = +sectorId;
    const name = encryptedName
      .split("")
      .map((char) => char === "-" ? " " : decrypt(char, n))
      .join("");
    if (name === "northpole object storage") {
      return n;
    }
  }
  return NaN;
}

function counter(iterable: Iterable<string>): Map<string, number> {
  const counts: Map<string, number> = new Map();
  for (const char of iterable) {
    const count = counts.get(char) ?? 0;
    counts.set(char, count + 1);
  }
  return counts;
}

function nMostCommon(counts: Map<string, number>, n: number): string {
  return [...counts.keys()]
    .sort((a, b) => {
      const countA = counts.get(a) ?? 0;
      const countB = counts.get(b) ?? 0;
      return countA !== countB
        ? countB - countA
        : a.charCodeAt(0) - b.charCodeAt(0);
    })
    .join("")
    .substr(0, n);
}

function decrypt(char: string, n: number): string {
  const base26 = char.charCodeAt(0) - A_CHAR_CODE;
  const shifted = (base26 + n) % 26 + A_CHAR_CODE;
  return String.fromCharCode(shifted);
}
