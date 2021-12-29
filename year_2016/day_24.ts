const parseDistances = (input: string): number[][] => {
  const rows = input.split("\n").map((row) => row.split(""));
  const locations: [number, number][] = [];
  rows.forEach((row, y) => {
    row.forEach((char, x) => {
      if (char !== "#" && char !== ".") {
        locations[+char] = [x, y];
      }
    });
  });
  const distances: number[][] = [[]];
  let i = 0;
  while (i < distances.length) {
    const queue = [[0, ...locations[i]]];
    const seen = Array.from(
      { length: rows.length },
      () => Array(rows[0].length).fill(false),
    );
    while (queue.length) {
      const [distance0, x0, y0] = queue.shift()!;
      if (seen[y0][x0]) {
        continue;
      }
      seen[y0][x0] = true;
      const distance1 = distance0 + 1;
      [
        [x0 - 1, y0],
        [x0, y0 - 1],
        [x0 + 1, y0],
        [x0, y0 + 1],
      ].forEach(([x1, y1]) => {
        switch (rows[y1][x1]) {
          case "#":
            break;
          case ".":
            queue.push([distance1, x1, y1]);
            break;
          default:
            queue.push([distance1, x1, y1]);
            (distances[+rows[y1][x1]] ??= [])[i] ??= distance1;
        }
      });
    }
    i++;
  }
  return distances;
};

const travelingSalesperson = (
  distances: number[][],
  roundTrip: boolean,
): number => {
  const n = distances.length;
  const memo = Array.from({ length: n }, () => Array(1 << n).fill(-1));

  return tsp(0, 1 << 0);

  function tsp(i: number, s: number): number {
    if (s === ((1 << n) - 1)) {
      return roundTrip ? distances[0][i] : 0;
    }
    if (memo[i][s] != -1) {
      return memo[i][s];
    }
    let result = Infinity;
    for (let j = 0; j < n; j++) {
      if (s & (1 << j)) {
        continue;
      }
      result = Math.min(result, distances[i][j] + tsp(j, s | (1 << j)));
    }
    return memo[i][s] = result;
  }
};

export function part1(input: string): number {
  const distances = parseDistances(input);
  return travelingSalesperson(distances, false);
}

export function part2(input: string): number {
  const distances = parseDistances(input);
  return travelingSalesperson(distances, true);
}
