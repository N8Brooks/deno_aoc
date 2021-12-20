export function part1(input: string): number {
  const binary = BigInt(`0x${input}`)
    .toString(2)
    .padStart(4 * input.length, "0");
  let pointer = 0, versionNumberSum = 0;
  while (pointer < binary.length) {
    versionNumberSum += parseInt(binary.substr(pointer, 3), 2);
    const typeId = parseInt(binary.substr(pointer + 3, 3), 2);
    pointer += 6;
    if (typeId === 4) {
      do {
        pointer += 5;
      } while (binary[pointer - 5] !== "0");
    } else {
      pointer += +binary[pointer] ? 12 : 16;
    }
  }
  return versionNumberSum;
}

export function part2(input: string): number {
  let pointer = 0;
  const binary = BigInt(`0x${input}`)
    .toString(2)
    .padStart(4 * input.length, "0");
  return evaluate().next().value;

  /** Evaluates `binary` from current `pointer` position */
  function* evaluate(): Generator<number> {
    while (pointer < binary.length) {
      const typeId = parseInt(binary.substr(pointer + 3, 3), 2);
      if (typeId === 4) {
        pointer += 6;
        let operand = 0;
        do {
          operand = 16 * operand + parseInt(binary.substr(pointer + 1, 4), 2);
          pointer += 5;
        } while (binary[pointer - 5] !== "0");
        yield operand;
        continue;
      }

      const operands: number[] = [];
      const it = evaluate();
      if (+binary[pointer + 6]) {
        pointer += 18;
        const count = parseInt(binary.substr(pointer - 11, 11), 2);
        for (let n = 0; n < count; n++) {
          operands.push(it.next().value);
        }
      } else {
        pointer += 22;
        const length = pointer + parseInt(binary.substr(pointer - 15, 15), 2);
        while (pointer < length) {
          operands.push(it.next().value);
        }
      }

      switch (typeId) {
        case 0:
          yield operands.reduce((a, b) => a + b, 0);
          break;
        case 1:
          yield operands.reduce((a, b) => a * b, 1);
          break;
        case 2:
          yield Math.min(...operands);
          break;
        case 3:
          yield Math.max(...operands);
          break;
        case 5:
          yield +(operands[0] > operands[1]);
          break;
        case 6:
          yield +(operands[0] < operands[1]);
          break;
        case 7:
          yield +(operands[0] === operands[1]);
          break;
      }
    }
  }
}
