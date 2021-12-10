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
  let one: string, four: string;
  for (const line of input.split("\n")) {
    const [inputs, outputs] = line.split(" | ").map((part) => part.split(" "));
    const signalPatterns = inputs.concat(outputs);
    one = signalPatterns.find(({ length }) => length === 2) ?? "";
    four = signalPatterns.find(({ length }) => length === 4) ?? "";
    let outputValue = 0;
    for (const output of outputs) {
      outputValue *= 10;
      switch (output.length) {
        case 2:
          outputValue += 1;
          break;
        case 3:
          outputValue += 7;
          break;
        case 4:
          outputValue += 4;
          break;
        case 7:
          outputValue += 8;
          break;
        case 5:
          outputValue += digitFor5(output);
          break;
        case 6:
          outputValue += digitFor6(output);
          break;
        default:
          throw new Error("No compatible digit");
      }
    }
    outputValuesTotal += outputValue;
  }
  return outputValuesTotal;

  function digitFor5(output: string): number {
    if (intersection(output, one) === 2) {
      return 3;
    } else if (intersection(output, four) === 2) {
      return 2;
    } else {
      return 5;
    }
  }

  function digitFor6(output: string): number {
    if (intersection(output, four) === 4) {
      return 9;
    } else if (intersection(output, one) === 2) {
      return 0;
    } else {
      return 6;
    }
  }
}
