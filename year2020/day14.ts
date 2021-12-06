const LINE_PATTERN = /(?:mask = ([X10]{36})|mem\[(\d+)\] = (\d+))/g;

const getMasksPart1 = (mask: string): [bigint, bigint] => {
  let orMask = 0n, andMask = 0n;
  for (const char of mask) {
    orMask <<= 1n;
    andMask <<= 1n;
    switch (char) {
      case ("0"):
        // andMask |= 0n;
        break;
      case ("1"):
        orMask |= 1n;
        andMask |= 1n;
        break;
      default:
        andMask |= 1n;
        break;
    }
  }
  return [andMask, orMask];
};

export function part1(input: string): bigint {
  const memory: Map<number, bigint> = new Map();
  let andMask = 0n, orMask = 0n;
  for (const [, mask, key, value] of input.matchAll(LINE_PATTERN)) {
    if (mask) {
      [andMask, orMask] = getMasksPart1(mask);
    } else {
      memory.set(+key, BigInt(value) & andMask | orMask);
    }
  }
  let total = 0n;
  for (const value of memory.values()) {
    total += value;
  }
  return total;
}

const getMasksPart2 = (mask: string): [[bigint, bigint][], bigint] => {
  let overwriteMask = 0n;
  const andOrMasks: [bigint, bigint][] = [[0n, 0n]];
  for (const char of mask) {
    overwriteMask <<= 1n;
    andOrMasks.forEach((andOrMasks) => {
      andOrMasks[0] <<= 1n;
      andOrMasks[1] <<= 1n;
    });
    switch (char) {
      case ("0"): {
        andOrMasks.forEach((andOrMasks) => {
          andOrMasks[0] |= 1n;
        });
        break;
      }
      case ("1"):
        overwriteMask |= 1n;
        break;
      default: {
        const ones: [bigint, bigint][] = andOrMasks.map(
          ([andMask, orMask]) => [andMask, orMask | 1n],
        );
        andOrMasks.push(...ones);
        break;
      }
    }
  }
  return [andOrMasks, overwriteMask];
};

export function part2(input: string): number {
  const memory: Map<bigint, number> = new Map();
  let andOrMasks: [bigint, bigint][] = [];
  let overwriteMask = 0n;
  for (const [, mask, keyInput, valueInput] of input.matchAll(LINE_PATTERN)) {
    if (mask) {
      [andOrMasks, overwriteMask] = getMasksPart2(mask);
    } else {
      const key = BigInt(keyInput);
      const value = +valueInput;
      andOrMasks.forEach(([andMask, orMask]) => {
        memory.set(key & andMask | orMask | overwriteMask, value);
      });
    }
  }
  let total = 0;
  for (const value of memory.values()) {
    total += value;
  }
  return total;
}
