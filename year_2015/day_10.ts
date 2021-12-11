export function part1(input: string): number {
  let result = input.split("");
  for (let i = 0; i < 40; i++) {
    result = lookSay(result);
  }
  return result.length;
}

export function part2(input: string): number {
  let result = input.split("");
  for (let i = 0; i < 50; i++) {
    result = lookSay(result);
  }
  return result.length;
}

export function lookSay(values: string[] | string): string[] {
  const result: string[] = [];
  let previousValue = "";
  let length = 0;
  for (const currentValue of values) {
    if (previousValue === currentValue) {
      length += 1;
      continue;
    } else if (previousValue !== "") {
      result.push(length + "", previousValue);
    }
    previousValue = currentValue;
    length = 1;
  }
  result.push(length + "", previousValue);
  return result;
}
