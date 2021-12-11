export function part1(input: string): number {
  let valid = 0;
  for (const passphrase of input.split("\n")) {
    const words = new Set();
    loop: {
      for (const word of passphrase.split(" ")) {
        if (words.has(word)) {
          break loop;
        }
        words.add(word);
      }
      valid++;
    }
  }
  return valid;
}

export function part2(input: string): number {
  let valid = 0;
  for (const passphrase of input.split("\n")) {
    const words = new Set();
    loop: {
      for (const word of passphrase.split(" ")) {
        const counts = new Map();
        for (const char of word) {
          const count = counts.get(char) ?? 0;
          counts.set(char, count + 1);
        }
        const key = [...counts]
          .sort(([a], [b]) => a.charCodeAt(0) - b.charCodeAt(0))
          .map((entry) => entry.join())
          .join();
        if (words.has(key)) {
          break loop;
        }
        words.add(key);
      }
      valid++;
    }
  }
  return valid;
}
