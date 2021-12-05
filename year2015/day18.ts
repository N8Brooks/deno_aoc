export function part1(input: string, steps: number): number {
  const state = input
    .split("\n")
    .map((line) => line.split("").map((char) => char === "#"));
  const rows = state.length;
  const cols = state[0].length;
  const counts = Array.from({ length: rows }, () => Array(cols));

  for (let step = 0; step < steps; step++) {
    // clear counts
    counts.forEach((count) => count.fill(0));
    // top left
    if (state[0][0]) {
      counts[1][0]++;
      counts[1][1]++;
      counts[0][1]++;
    }
    // top row
    for (let col = 1; col < cols - 1; col++) {
      if (state[0][col]) {
        counts[0][col - 1]++;
        counts[1][col - 1]++;
        counts[1][col]++;
        counts[1][col + 1]++;
        counts[0][col + 1]++;
      }
    }
    // top right
    if (state[0][cols - 1]) {
      counts[1][cols - 1]++;
      counts[1][cols - 2]++;
      counts[0][cols - 2]++;
    }
    for (let row = 1; row < rows - 1; row++) {
      // left col
      if (state[row][0]) {
        counts[row - 1][0]++;
        counts[row - 1][1]++;
        counts[row][1]++;
        counts[row + 1][1]++;
        counts[row + 1][0]++;
      }
      // middle
      for (let col = 1; col < cols - 1; col++) {
        if (state[row][col]) {
          counts[row - 1][col - 1]++;
          counts[row - 1][col]++;
          counts[row - 1][col + 1]++;
          counts[row][col + 1]++;
          counts[row + 1][col + 1]++;
          counts[row + 1][col]++;
          counts[row + 1][col - 1]++;
          counts[row][col - 1]++;
        }
      }
      // right col
      if (state[row][cols - 1]) {
        counts[row - 1][cols - 1]++;
        counts[row - 1][cols - 2]++;
        counts[row][cols - 2]++;
        counts[row + 1][cols - 2]++;
        counts[row + 1][cols - 1]++;
      }
    }
    // bottom left
    if (state[rows - 1][0]) {
      counts[rows - 1][1]++;
      counts[rows - 2][1]++;
      counts[rows - 2][0]++;
    }
    // bottom row
    for (let col = 1; col < cols - 1; col++) {
      if (state[rows - 1][col]) {
        counts[rows - 1][col - 1]++;
        counts[rows - 2][col - 1]++;
        counts[rows - 2][col]++;
        counts[rows - 2][col + 1]++;
        counts[rows - 1][col + 1]++;
      }
    }
    // bottom right
    if (state[rows - 1][cols - 1]) {
      counts[rows - 1][cols - 2]++;
      counts[rows - 2][cols - 1]++;
      counts[rows - 2][cols - 2]++;
    }
    // new state
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        state[row][col] = counts[row][col] === 3 ||
          (state[row][col] && counts[row][col] === 2);
      }
    }
  }
  // count lights
  let count = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (state[row][col]) {
        count++;
      }
    }
  }
  return count;
}

export function part2(input: string, steps: number): number {
  const state = input
    .split("\n")
    .map((line) => line.split("").map((char) => char === "#"));
  const rows = state.length;
  const cols = state[0].length;
  const counts = Array.from({ length: rows }, () => Array(cols));

  for (let step = 0; step < steps; step++) {
    // clear counts
    counts.forEach((count) => count.fill(0));
    // top left
    counts[1][0]++;
    counts[1][1]++;
    counts[0][1]++;
    // top row
    for (let col = 1; col < cols - 1; col++) {
      if (state[0][col]) {
        counts[0][col - 1]++;
        counts[1][col - 1]++;
        counts[1][col]++;
        counts[1][col + 1]++;
        counts[0][col + 1]++;
      }
    }
    // top right
    counts[1][cols - 1]++;
    counts[1][cols - 2]++;
    counts[0][cols - 2]++;
    for (let row = 1; row < rows - 1; row++) {
      // left col
      if (state[row][0]) {
        counts[row - 1][0]++;
        counts[row - 1][1]++;
        counts[row][1]++;
        counts[row + 1][1]++;
        counts[row + 1][0]++;
      }
      // middle
      for (let col = 1; col < cols - 1; col++) {
        if (state[row][col]) {
          counts[row - 1][col - 1]++;
          counts[row - 1][col]++;
          counts[row - 1][col + 1]++;
          counts[row][col + 1]++;
          counts[row + 1][col + 1]++;
          counts[row + 1][col]++;
          counts[row + 1][col - 1]++;
          counts[row][col - 1]++;
        }
      }
      // right col
      if (state[row][cols - 1]) {
        counts[row - 1][cols - 1]++;
        counts[row - 1][cols - 2]++;
        counts[row][cols - 2]++;
        counts[row + 1][cols - 2]++;
        counts[row + 1][cols - 1]++;
      }
    }
    // bottom left
    counts[rows - 1][1]++;
    counts[rows - 2][1]++;
    counts[rows - 2][0]++;
    // bottom row
    for (let col = 1; col < cols - 1; col++) {
      if (state[rows - 1][col]) {
        counts[rows - 1][col - 1]++;
        counts[rows - 2][col - 1]++;
        counts[rows - 2][col]++;
        counts[rows - 2][col + 1]++;
        counts[rows - 1][col + 1]++;
      }
    }
    // bottom right
    counts[rows - 1][cols - 2]++;
    counts[rows - 2][cols - 1]++;
    counts[rows - 2][cols - 2]++;
    // new state
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        state[row][col] = counts[row][col] === 3 ||
          (state[row][col] && counts[row][col] === 2);
      }
    }
  }
  // four corners
  state[0][0] = true;
  state[0][cols - 1] = true;
  state[rows - 1][cols - 1] = true;
  state[rows - 1][0] = true;
  // count lights
  let count = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (state[row][col]) {
        count++;
      }
    }
  }
  return count;
}
