function* bridges(input: string): Generator<[number, number]> {
  const components = input
    .split("\n")
    .map((line) => line.split("/"))
    .map(([a, b]): [number, number, boolean] => [+a, +b, false]);
  const n = components.length;
  const bridge = [];
  let strength = 0, port = 0, i = 0;
  do {
    for (; i < n; i++) {
      if (components[i][2]) {
        continue;
      }
      const [a, b] = components[i];
      if (a === port || b === port) {
        bridge.push(i);
        components[i][2] = true;
        strength += a + b;
        port = port === a ? b : a;
        i = 0;
        yield [strength, bridge.length];
        break;
      }
    }
    while (i === n && bridge.length) {
      i = bridge.pop()!;
      const [a, b] = components[i];
      components[i][2] = false;
      strength -= a + b;
      port = port === a ? b : a;
      i++;
    }
  } while (i < n);
}

export function part1(input: string): number {
  let maxStrength = 0;
  for (const [strength] of bridges(input)) {
    if (strength > maxStrength) {
      maxStrength = strength;
    }
  }
  return maxStrength;
}

export function part2(input: string): number {
  let maxLength = 0, maxStrength = 0;
  for (const [strength, length] of bridges(input)) {
    if (length === maxLength) {
      maxStrength = Math.max(strength, maxStrength);
    } else if (length > maxLength) {
      maxStrength = strength;
      maxLength = length;
    }
  }
  return maxStrength;
}
