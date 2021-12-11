type Registers = {
  a: number;
  b: number;
};

const compute = (input: string, registers: Registers): Registers => {
  const program = input
    .split("\n")
    .map((line): [string, keyof Registers, number] => {
      const [instruction, operandA, operandB] = line.split(/,? /);
      if (instruction === "jmp") {
        // Register `"a"` is a placeholder here
        return [instruction, "a", +operandA - 1];
      } else if (operandB === undefined) {
        return [instruction, operandA as keyof Registers, NaN];
      } else {
        return [instruction, operandA as keyof Registers, +operandB - 1];
      }
    });

  let pointer = 0;
  while (pointer < program.length) {
    const [instruction, register, offset] = program[pointer];
    switch (instruction) {
      case "hlf":
        registers[register] >>>= 1;
        break;
      case "tpl":
        registers[register] *= 3;
        break;
      case "inc":
        registers[register]++;
        break;
      case "jmp":
        pointer += offset;
        break;
      case "jie":
        if (!(registers[register] & 1)) {
          pointer += offset;
        }
        break;
      case "jio":
        if (registers[register] === 1) {
          pointer += offset;
        }
        break;
      default:
        throw new Error("Unreachable");
    }
    pointer++;
  }

  return registers;
};

export function part1(input: string, register: keyof Registers): number {
  return compute(input, { a: 0, b: 0 })[register];
}

export function part2(input: string, register: keyof Registers): number {
  return compute(input, { a: 1, b: 0 })[register];
}
