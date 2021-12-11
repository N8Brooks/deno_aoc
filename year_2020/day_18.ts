type Operation = typeof add | typeof mul;

type Stack = (number | undefined | Operation)[];

const add = (a: number, b: number): number => {
  return a + b;
};

const mul = (a: number, b: number): number => {
  return a * b;
};

const evaluatePart1 = (expression: string): number => {
  const stack: Stack = [];
  let operand = 0;
  let operate = add;

  for (const token of expression.replaceAll(" ", "")) {
    switch (token) {
      case "+":
        operate = add;
        break;
      case "*":
        operate = mul;
        break;
      case "(":
        stack.push(operand, operate);
        operand = 0;
        operate = add;
        break;
      case ")":
        operate = stack.pop() as Operation;
        operand = operate(stack.pop() as number, operand);
        break;
      default:
        operand = operate(operand, +token);
    }
  }

  return operand;
};

export function part1(input: string): number {
  return input
    .split("\n")
    .reduce((sum, expression) => sum + evaluatePart1(expression), 0);
}

const evaluatePart2 = (expression: string): number => {
  const stack: Stack = [];
  let operand = 0;
  let operate = add;

  for (const token of expression.replaceAll(" ", "")) {
    switch (token) {
      case "+":
        operate = add;
        break;
      case "*":
        stack.push(operand, mul);
        operand = 0;
        operate = add;
        break;
      case "(":
        stack.push(operand, operate, undefined);
        operand = 0;
        operate = add;
        break;
      case ")":
        while (stack.pop() !== undefined) {
          operand *= stack.pop() as number;
        }
        if (stack[stack.length - 1] === add) {
          stack.pop();
          operand += stack.pop() as number;
        }
        break;
      default:
        operand += +token;
    }
  }

  return (stack.filter(Number.isInteger) as number[]).reduce(mul, operand);
};

export function part2(input: string): number {
  return input
    .split("\n")
    .reduce((sum, expression) => sum + evaluatePart2(expression), 0);
}
