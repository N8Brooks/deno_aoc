export function part1(input: string): number {
  const numbers = input
    .split("\n")
    .map(Number)
    .sort((a, b) => a - b);
  numbers.push(numbers[numbers.length - 1] + 3);
  let pre = 0, one = 0, three = 0;
  for (const num of numbers) {
    switch (num - pre) {
      case 1:
        one++;
        break;
      case 3:
        three++;
        break;
    }
    pre = num;
  }
  return one * three;
}

export function part2(input: string): number {
  const numbers = input
    .split("\n")
    .map(Number)
    .sort((a, b) => a - b);
  numbers.push(numbers[numbers.length - 1] + 3);
  let window = [[0, 1]];
  for (const num of numbers) {
    window = window.filter(([element]) => num - element <= 3);
    window.push([num, window.reduce((sum, [, ways]) => sum + ways, 0)]);
  }
  return window[window.length - 1][1];
}
