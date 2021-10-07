export function part1(data: string): number {
  let real = 0, imag = 1, x = 0, y = 0;
  for (const [, turn, distance] of data.matchAll(/([LR])(\d+)/g)) {
    [real, imag] = turn === "R" ? [imag, -real] : [-imag, real];
    [x, y] = [x + real * +distance, y + imag * +distance];
  }
  return Math.abs(x) + Math.abs(y);
}

export function part2(data: string): number {
  let real = 0, imag = 1, x = 0, y = 0;
  const visited = [[true]];
  for (const [, turn, distance] of data.matchAll(/([LR])(\d+)/g)) {
    [real, imag] = turn === "R" ? [imag, -real] : [-imag, real];
    for (let i = 0; i < +distance; i++) {
      [x, y] = [x + real, y + imag];
      visited[x] ??= [];
      if (y in visited[x]) {
        return Math.abs(x) + Math.abs(y);
      }
      visited[x][y] = true;
    }
  }
  return Math.abs(x) + Math.abs(y);
}
