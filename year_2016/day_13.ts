import { bitCount } from "../util.ts";

const isWallFactory = (favorite: number): (x: number, y: number) => boolean => {
  const isWall = (x: number, y: number) => {
    if (x === -1 || y === -1) {
      return true;
    }

    const n = x * x + 3 * x + 2 * x * y + y + y * y;
    const wall = bitCount(n + favorite) % 2 === 1;
    return wall;
  };

  return isWall;
};

export function part1(
  input: string,
  [targetX, targetY]: [number, number],
): number {
  const isWall = isWallFactory(+input);
  const queue: number[][] = [[1, 1, 0]];
  const seen = [[], [false, true]];
  while (true) {
    const [currentX, currentY, currentSteps] = queue.shift()!;
    if (currentX === targetX && currentY === targetY) {
      return currentSteps;
    }

    let nextX, nextY;
    const nextSteps = currentSteps + 1;
    seen[currentX + 1] ??= [];

    nextX = currentX - 1;
    nextY = currentY;
    if (!isWall(nextX, nextY) && !seen[nextX][nextY]) {
      queue.push([nextX, nextY, nextSteps]);
      seen[nextX][nextY] = true;
    }

    nextX = currentX;
    nextY = currentY - 1;
    if (!isWall(nextX, nextY) && !seen[nextX][nextY]) {
      queue.push([nextX, nextY, nextSteps]);
      seen[nextX][nextY] = true;
    }

    nextX = currentX;
    nextY = currentY + 1;
    if (!isWall(nextX, nextY) && !seen[nextX][nextY]) {
      queue.push([nextX, nextY, nextSteps]);
      seen[nextX][nextY] = true;
    }

    nextX = currentX + 1;
    nextY = currentY;
    if (!isWall(nextX, nextY) && !seen[nextX][nextY]) {
      queue.push([nextX, nextY, nextSteps]);
      seen[nextX][nextY] = true;
    }
  }
}

export function part2(input: string): number {
  const isWall = isWallFactory(+input);
  const queue: number[][] = [[1, 1, 0]];
  let count = 1;
  const seen = [[], [false, true]];
  while (true) {
    const [currentX, currentY, currentSteps] = queue.shift()!;
    if (currentSteps === 50) {
      return count;
    }

    let nextX, nextY;
    const nextSteps = currentSteps + 1;
    seen[currentX + 1] ??= [];

    nextX = currentX - 1;
    nextY = currentY;
    if (!isWall(nextX, nextY) && !seen[nextX][nextY]) {
      queue.push([nextX, nextY, nextSteps]);
      seen[nextX][nextY] = true;
      count++;
    }

    nextX = currentX;
    nextY = currentY - 1;
    if (!isWall(nextX, nextY) && !seen[nextX][nextY]) {
      queue.push([nextX, nextY, nextSteps]);
      seen[nextX][nextY] = true;
      count++;
    }

    nextX = currentX;
    nextY = currentY + 1;
    if (!isWall(nextX, nextY) && !seen[nextX][nextY]) {
      queue.push([nextX, nextY, nextSteps]);
      seen[nextX][nextY] = true;
      count++;
    }

    nextX = currentX + 1;
    nextY = currentY;
    if (!isWall(nextX, nextY) && !seen[nextX][nextY]) {
      queue.push([nextX, nextY, nextSteps]);
      seen[nextX][nextY] = true;
      count++;
    }
  }
}
