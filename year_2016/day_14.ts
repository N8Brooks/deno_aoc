import { crypto } from "../deps.ts";
import { decode } from "../util.ts";

const textEncoder = new TextEncoder();

const getThreesAndFives = (hash: string): [string, Set<string>] => {
  let [a, b, c, d] = hash;
  let hasThree = (b === c) && (a === b || c === d) ? b : "";
  const hasFives: Set<string> = new Set();
  for (let i = 4; i < hash.length; i++) {
    const e = hash[i];
    if (c === d && d === e) {
      if (!hasThree) {
        hasThree = c;
      }
      if (a === b && b === c) {
        hasFives.add(a);
      }
    }
    [a, b, c, d] = [b, c, d, e];
  }
  return [hasThree, hasFives];
};

const hashWithStretching = async (
  input: string,
  stretching: number,
): Promise<number> => {
  let hasThreeIndices: [number, string][] = [];
  let index = 0;
  let maxIndex = -1;
  const hashIndices: Set<number> = new Set();
  while (hashIndices.size < 64 || hasThreeIndices[0]?.[0] < maxIndex) {
    let hash = input + index;
    for (let i = 0; i < stretching; i++) {
      const data = textEncoder.encode(hash);
      const hashBuffer = await crypto.subtle.digest("MD5", data);
      hash = decode(hashBuffer);
    }
    const [hasThree, hasFives] = getThreesAndFives(hash);
    if (hasThreeIndices[0]?.[0] < index - 1000) {
      hasThreeIndices.shift();
    }
    for (const hasFive of hasFives) {
      for (const [i, hasThree] of hasThreeIndices) {
        if (hasThree === hasFive) {
          maxIndex = Math.max(maxIndex, i);
          hashIndices.add(i);
        }
      }
      hasThreeIndices = hasThreeIndices.filter(([i]) => !hashIndices.has(i));
    }
    if (hasThree) {
      hasThreeIndices.push([index, hasThree]);
    }
    index++;
  }
  return [...hashIndices].sort((a, b) => a - b)[63];
};

export function part1(input: string): Promise<number> {
  return hashWithStretching(input, 1);
}

export function part2(input: string): Promise<number> {
  return hashWithStretching(input, 2017);
}
