const evaluateInstructions = (input: string) => {
  const registers: Map<string, number> = new Map();
  let maxValue = -Infinity;
  for (const line of input.split("\n")) {
    const [instruction, comparison] = line.split(" if ");
    if (evaluateComparison(comparison)) {
      operateInstruction(instruction);
    }
  }
  return {
    part1: Math.max(...registers.values()),
    part2: maxValue,
  };

  function evaluateComparison(comparison: string): boolean {
    const [a, operator, b] = comparison.split(" ");
    const valueOfA = registers.get(a) ?? 0;
    const valueOfB = +b;
    switch (operator) {
      case ">":
        return valueOfA > valueOfB;
      case "<":
        return valueOfA < valueOfB;
      case ">=":
        return valueOfA >= valueOfB;
      case "<=":
        return valueOfA <= valueOfB;
      case "==":
        return valueOfA == valueOfB;
      case "!=":
        return valueOfA != valueOfB;
      default:
        throw Error("Unknown comparison operator");
    }
  }

  function operateInstruction(instruction: string): void {
    const [a, operator, b] = instruction.split(" ");
    const valueOfA = registers.get(a) ?? 0;
    const valueOfB = operator === "inc" ? +b : -b;
    const value = valueOfA + valueOfB;
    maxValue = Math.max(maxValue, value);
    registers.set(a, value);
  }
};

export function part1(input: string): number {
  return evaluateInstructions(input).part1;
}

export function part2(input: string): number {
  return evaluateInstructions(input).part2;
}
