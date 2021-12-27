export function dragonCurve(
  initialState: string,
  desiredLength: number,
): string {
  let state = initialState;
  while (state.length < desiredLength) {
    const inverse = state.replaceAll(
      /[01]/g,
      (_char, i) => state[state.length - i - 1] === "1" ? "0" : "1",
    );
    state = `${state}0${inverse}`;
  }
  return state;
}

export function checksum(initialState: string): string {
  let state = initialState;
  while (!(state.length & 1)) {
    state = state.replaceAll(/[01]{2}/g, ([a, b]) => a === b ? "1" : "0");
  }
  return state;
}

export function dragonChecksum(
  initialState: string,
  desiredLength: number,
): string {
  const curve = dragonCurve(initialState, desiredLength);
  return checksum(curve.substring(0, desiredLength));
}

export function part1(input: string): string {
  return dragonChecksum(input, 272);
}

export function part2(input: string): string {
  return dragonChecksum(input, 35651584);
}
