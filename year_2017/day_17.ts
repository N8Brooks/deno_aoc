export function part1(input: string): number {
  const steps = +input;
  const state = [0];
  let position = 1;
  for (let value = 1; value < 2017; value++) {
    state.splice(position, 0, value);
    position = (position + steps) % state.length + 1;
  }
  return state[position];
}

export function part2(input: string): number {
  const steps = +input;
  let valueAfterZero = 1;
  let position = 1;
  for (let value = 1; value < 5e7; value++) {
    if (position === 1) {
      valueAfterZero = value;
    }
    position = (position + steps) % (value + 1) + 1;
  }
  return valueAfterZero;
}
