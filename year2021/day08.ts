const EASY_DIGIT_LENGTHS = [2, 3, 4, 7];

export function part1(input: string): number {
  return input
    .split("\n")
    .map((line) => line.split(" | ")[1])
    .reduce((count, signalPatterns) => {
      for (const { length } of signalPatterns.split(" ")) {
        if (EASY_DIGIT_LENGTHS.includes(length)) {
          count++;
        }
      }
      return count;
    }, 0);
}

const intersection = (a: string, b: string): number => {
  let count = 0;
  for (const char of a) {
    if (b.includes(char)) {
      count++;
    }
  }
  return count;
};

export function part2(input: string): number {
  let outputValuesTotal = 0;
  for (const line of input.split("\n")) {
    const [inputs, outputs] = line.split(" | ").map((part) => part.split(" "));
    const signalPatterns = inputs.concat(outputs);
    const one = signalPatterns.find(({ length }) => length === 2) ?? "";
    const four = signalPatterns.find(({ length }) => length === 4) ?? "";
    let outputValue = 0;
    for (const output of outputs) {
      let digit: number;
      switch (output.length) {
        case 2:
          digit = 1;
          break;
        case 3:
          digit = 7;
          break;
        case 4:
          digit = 4;
          break;
        case 7:
          digit = 8;
          break;
        case 5:
          digit = intersection(output, one) === 2
            ? 3
            : intersection(output, four) === 2
            ? 2
            : 5;
          break;
        case 6:
          digit = intersection(output, four) === 4
            ? 9
            : intersection(output, one) === 2
            ? 0
            : 6;
          break;
        default:
          throw new Error("No compatible digit");
      }
      outputValue = 10 * outputValue + digit;
    }
    outputValuesTotal += outputValue;
  }
  return outputValuesTotal;
}
