export function part1(data: string): number {
  let result = data.trimEnd().split("");
  for (let i = 0; i < 40; i++) {
    result = lookSay(result);
  }
  return result.length;
}

export function part2(data: string): number {
  let result = data.trimEnd().split("");
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
