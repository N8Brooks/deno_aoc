export function part1(input: string): number {
  const report = input.split("\n").map((line) => line.split("").map(Number));
  let gamma = 0;
  let epsilon = 0;
  for (let j = 0; j < report[0].length; j++) {
    const bitCounts = [0, 0];
    for (let i = 0; i < report.length; i++) {
      const bit = report[i][j];
      bitCounts[bit]++;
    }
    gamma = gamma << 1 | oneMostCommon(bitCounts);
    epsilon = epsilon << 1 | zeroMostCommon(bitCounts);
  }
  return gamma * epsilon;
}

export function part2(input: string): number {
  const report = input.split("\n").map((line) => line.split("").map(Number));
  const oxygen = criteriaCompliant(report, oneMostCommon);
  const co2 = criteriaCompliant(report, zeroMostCommon);
  return oxygen * co2;
}

/** Returns the number where all bits comply with the given criteria */
function criteriaCompliant(
  report: number[][],
  criteria: (bitCounts: number[]) => number,
) {
  let j = 0;
  while (report.length > 1) {
    const bitCounts = [0, 0];
    for (let i = 0; i < report.length; i++) {
      const bit = report[i][j];
      bitCounts[bit]++;
    }
    const bit = +criteria(bitCounts);
    report = report.filter((bits) => bits[j] === bit);
    j++;
  }
  return bitsToNumber(report[0]);
}

/** Returns `1` if there are equal or more `1`s than `0`s */
function oneMostCommon([zeroBits, oneBits]: number[]): number {
  return +(oneBits >= zeroBits);
}

/** Returns `1` if there are more `0`s than `1`s */
function zeroMostCommon([zeroBits, oneBits]: number[]): number {
  return +(zeroBits > oneBits);
}

/** Converts a binary `Array` to its numerical equivalent */
function bitsToNumber(bits: number[]): number {
  let rating = 0;
  for (const bit of bits) {
    rating = rating << 1 | bit;
  }
  return rating;
}
