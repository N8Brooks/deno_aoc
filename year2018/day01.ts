export function part1(data: string): number {
  return data.split(/\s+/).reduce((a, b) => a + +b, 0);
}

export function part2(data: string): number {
  const frequencyChanges = data.split(/\s+/).map(Number);
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
