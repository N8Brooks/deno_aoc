const runProgram = (
  readOnlyPositions: readonly number[],
  noun: number,
  verb: number,
): number => {
  const positions = [...readOnlyPositions];
  positions[1] = noun;
  positions[2] = verb;
  for (let i = 0; i < positions.length; i += 4) {
    const opcode = positions[i];
    if (opcode === 99) {
      break;
    }
    const a = positions[positions[i + 1]];
    const b = positions[positions[i + 2]];
    const j = positions[i + 3];
    positions[j] = opcode === 1 ? a + b : a * b;
  }
  return positions[0];
};

export function part1(input: string): number {
  const positions = input.split(",").map((d) => +d);
  return runProgram(positions, 12, 2);
}

const PART_2_OUTPUT = 19_690_720;

export function part2(input: string): number {
  const positions = input.split(",").map((d) => +d);
  let i = 1;
  while (true) {
    for (let noun = 0; noun < i; noun++) {
      if (runProgram(positions, noun, i) === PART_2_OUTPUT) {
        return 100 * noun + i;
      }
    }
    for (let verb = 0; verb < i; verb++) {
      if (runProgram(positions, i, verb) === PART_2_OUTPUT) {
        return 100 * i + verb;
      }
    }
    i++;
  }
}
