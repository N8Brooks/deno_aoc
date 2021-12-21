const REPETITION_PATTERN = /\((\d+)x(\d+)\)/g;

interface Repetition {
  start: number;
  length: number;
  count: number;
}

function* repetitions(
  input: string,
  includeSubRepetitions: boolean,
): Generator<Repetition> {
  let match;
  while ((match = REPETITION_PATTERN.exec(input))) {
    yield {
      start: match.index,
      length: match[0].length,
      count: 0,
    };
    yield {
      start: REPETITION_PATTERN.lastIndex,
      length: +match[1],
      count: +match[2],
    };
    if (!includeSubRepetitions) {
      REPETITION_PATTERN.lastIndex += +match[1];
    }
  }
}

const decompress = (input: string, isV2: boolean): number => {
  const weights = new Uint32Array(input.length).fill(1);
  for (const { start, length, count } of repetitions(input, isV2)) {
    for (let i = 0; i < length; i += 1) {
      weights[start + i] *= count;
    }
  }
  return weights.reduce((a, b) => a + b);
};

export function part1(input: string): number {
  return decompress(input, false);
}

export function part2(input: string): number {
  return decompress(input, true);
}
