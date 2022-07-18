export function part1(input: string, preamble = 25) {
  const numbers = input.split("\n").map(Number);
  const history: Map<number, number> = new Map();
  for (let i = 0; i < preamble; i++) {
    const num = numbers[i];
    const count = history.get(num) ?? 0;
    history.set(num, count + 1);
  }
  for (let i = preamble; i < numbers.length; i++) {
    const num = numbers[i];
    loop: {
      for (const a of history.keys()) {
        const b = num - a;
        if (a === b && (history.get(b) ?? 0) >= 2) {
          break loop;
        } else if (history.has(b)) {
          break loop;
        }
      }
      return num;
    }
    const count1 = history.get(num) ?? 0;
    history.set(num, count1 + 1);
    const num2 = numbers[i - preamble];
    const count2 = history.get(num2) ?? 0;
    if (count2 === 1) {
      history.delete(num2);
    } else {
      history.set(num2, count2 - 1);
    }
  }
  throw Error("no invalid number found");
}

export function part2(input: string, preamble = 25) {
  const num = part1(input, preamble);
  const numbers = input.split("\n").map(Number);
  let i, j;
  for (i = 0; i < numbers.length; i++) {
    let sum = numbers[i] + numbers[i + 1];
    j = i + 2;
    while (sum < num) {
      sum += numbers[j++];
    }
    if (sum === num) {
      break;
    }
  }
  const range = numbers.slice(i, j);
  return Math.min(...range) + Math.max(...range);
}
