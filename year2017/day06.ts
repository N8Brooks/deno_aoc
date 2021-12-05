const iMax = (array: number[]): [number, number] => {
  let maxIndex = -1, maxValue = -Infinity;
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    if (value > maxValue) {
      maxValue = value;
      maxIndex = index;
    }
  }
  return [maxValue, maxIndex];
};

export function part1(input: string): number {
  const banks = input.split("\t").map(Number);
  const states: Set<string> = new Set();
  let key = banks.join();
  do {
    states.add(key);
    const [maxValue, maxIndex] = iMax(banks);
    const remainder = maxValue % banks.length;
    const quotient = Math.floor(maxValue / banks.length);
    banks[maxIndex] = 0;
    if (quotient > 0) {
      for (let i = 0; i < banks.length; i++) {
        banks[i] += quotient;
      }
    }
    if (remainder > 0) {
      const endIndex = maxIndex + remainder + 1;
      if (endIndex > banks.length) {
        for (let i = maxIndex + 1; i < banks.length; i++) {
          banks[i]++;
        }
        for (let i = 0; i < endIndex % banks.length; i++) {
          banks[i]++;
        }
      } else {
        for (let i = maxIndex + 1; i < endIndex; i++) {
          banks[i]++;
        }
      }
    }
    key = banks.join();
  } while (!states.has(key));
  return states.size;
}

export function part2(input: string): number {
  const banks = input.split("\t").map(Number);
  const states: Map<string, number> = new Map();
  let key = banks.join();
  do {
    states.set(key, states.size);
    const [maxValue, maxIndex] = iMax(banks);
    const remainder = maxValue % banks.length;
    const quotient = Math.floor(maxValue / banks.length);
    banks[maxIndex] = 0;
    if (quotient > 0) {
      for (let i = 0; i < banks.length; i++) {
        banks[i] += quotient;
      }
    }
    if (remainder > 0) {
      const endIndex = maxIndex + remainder + 1;
      if (endIndex > banks.length) {
        for (let i = maxIndex + 1; i < banks.length; i++) {
          banks[i]++;
        }
        for (let i = 0; i < endIndex % banks.length; i++) {
          banks[i]++;
        }
      } else {
        for (let i = maxIndex + 1; i < endIndex; i++) {
          banks[i]++;
        }
      }
    }
    key = banks.join();
  } while (!states.has(key));
  return states.size - (states.get(key) as number);
}
