export function part1(data: string): string {
  const messages = data.split("\n");
  const width = messages[0].length;
  const result = Array(width);
  for (let col = 0; col < width; col++) {
    const counts: Map<string, number> = new Map();
    for (const message of messages) {
      const count = counts.get(message[col]) ?? 0;
      counts.set(message[col], count + 1);
    }
    result[col] = [...counts].reduce((a, b) => a[1] > b[1] ? a : b)[0];
  }
  return result.join("");
}

export function part2(data: string): string {
  const messages = data.split("\n");
  const width = messages[0].length;
  const result = Array(width);
  for (let col = 0; col < width; col++) {
    const counts: Map<string, number> = new Map();
    for (const message of messages) {
      const count = counts.get(message[col]) ?? 0;
      counts.set(message[col], count + 1);
    }
    result[col] = [...counts].reduce((a, b) => a[1] < b[1] ? a : b)[0];
  }
  return result.join("");
}
