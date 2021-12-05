const HYPER_NET_SEQUENCE = /\[([a-z]+)\]/g;

const SUPER_NET_SEQUENCE = /(?:^|\])([a-z]+)(?:\[|$)/g;

export function part1(input: string): number {
  let count = 0;
  for (const line of input.split("\n")) {
    loop: {
      for (const [, inside] of line.matchAll(HYPER_NET_SEQUENCE)) {
        if (hasAbba(inside)) {
          break loop;
        }
      }
      for (const [, outside] of line.matchAll(SUPER_NET_SEQUENCE)) {
        if (hasAbba(outside)) {
          count++;
          break loop;
        }
      }
    }
  }
  return count;
}

export function part2(input: string): number {
  let count = 0;
  for (const line of input.split("\n")) {
    const abas: Set<string> = new Set();
    for (const [, inside] of line.matchAll(HYPER_NET_SEQUENCE)) {
      for (const [a, b] of getAbas(inside)) {
        abas.add(`${a}${b}`);
      }
    }
    for (const [, outside] of line.matchAll(SUPER_NET_SEQUENCE)) {
      for (const [a, b] of getAbas(outside)) {
        if (abas.has(`${b}${a}`)) {
          count++;
          break;
        }
      }
    }
  }
  return count;
}

function hasAbba(sequence: string): boolean {
  let [a0, b0, b1] = sequence.slice(0, 3);
  for (let i = 3; i < sequence.length; i++) {
    const a1 = sequence[i];
    if (a0 === a1 && b0 === b1 && a0 !== b0) {
      return true;
    }
    [a0, b0, b1] = [b0, b1, a1];
  }
  return false;
}

function* getAbas(sequence: string): Generator<[string, string]> {
  let [a0, b0] = sequence.slice(0, 2);
  for (let i = 2; i < sequence.length; i++) {
    const a1 = sequence[i];
    if (a0 === a1 && a0 !== b0) {
      yield [a0, b0];
    }
    [a0, b0] = [b0, a1];
  }
}
