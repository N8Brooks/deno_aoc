const LOWER_CASE_A_CHAR_CODE = "a".charCodeAt(0);

const UPPER_CASE_A_CHAR_CODE = "A".charCodeAt(0);

const REACTING_UNITS_PATTERN = new RegExp(
  Array
    .from({ length: 26 }, (_, i) => {
      const lowerCase = String.fromCharCode(LOWER_CASE_A_CHAR_CODE + i);
      const upperCase = String.fromCharCode(UPPER_CASE_A_CHAR_CODE + i);
      return [lowerCase + upperCase, upperCase + lowerCase];
    })
    .flat()
    .join("|"),
  "g",
);

const reactPolymer = (currentPolymer: string): number => {
  let previousPolymer = "";
  do {
    previousPolymer = currentPolymer;
    currentPolymer = previousPolymer.replaceAll(REACTING_UNITS_PATTERN, "");
  } while (previousPolymer !== currentPolymer);
  return currentPolymer.length;
};

export function part1(input: string): number {
  return reactPolymer(input);
}

export function part2(input: string): number {
  return Math.min(...Array.from({ length: 26 }, (_, i) => {
    const lowerCase = String.fromCharCode(LOWER_CASE_A_CHAR_CODE + i);
    const upperCase = String.fromCharCode(UPPER_CASE_A_CHAR_CODE + i);
    const pattern = new RegExp(`${lowerCase}|${upperCase}`, "g");
    const polymer = input.replaceAll(pattern, "");
    return reactPolymer(polymer);
  }));
}
