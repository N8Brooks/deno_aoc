export function part1(input: string): number {
  return input.split(/\s+/).reduce((a, b) => a + +b, 0);
}

export function part2(input: string): number {
  const frequencyChanges = input.split(/\s+/).map(Number);
  const seenFrequencies: boolean[] = [true];
  let currentFrequency = 0;
  while (true) {
    for (const frequencyChange of frequencyChanges) {
      currentFrequency += frequencyChange;
      if (seenFrequencies[currentFrequency]) {
        return currentFrequency;
      } else {
        seenFrequencies[currentFrequency] = true;
      }
    }
  }
}
