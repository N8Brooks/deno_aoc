export function part1(input: string): number {
  const y0 = +input.match(/y=(-?\d+)/)![1];
  return y0 * (y0 - Math.sign(y0)) / 2;
}

export function part2(input: string): number {
  const [x0, x1, y0, y1] = [...input.matchAll(/[\d\-]+/g)].map((d) => +d);
  let targetReachedCount = 0;

  let yVelocity = -y0;
  let xVelocityLeftBound = Math.ceil((Math.sqrt(8 * x0) - 1) / 2);
  let xVelocityRightBound = xVelocityLeftBound + 1;

  while (y0 <= --yVelocity) {
    // Update x velocity left bound
    let xVelocity = xVelocityLeftBound;
    let targetAreaReached = reachesTargetArea(xVelocity, yVelocity);
    while (xVelocity <= x1 && !targetAreaReached) {
      xVelocity++;
      targetAreaReached = reachesTargetArea(xVelocity, yVelocity);
    }
    if (!targetAreaReached) {
      continue;
    }
    xVelocityLeftBound = xVelocity;

    // Update x velocity right bound
    if (xVelocityRightBound > xVelocity) {
      xVelocity = xVelocityRightBound;
      targetAreaReached = reachesTargetArea(xVelocity, yVelocity);
    }
    while (targetAreaReached) {
      xVelocity++;
      targetAreaReached = reachesTargetArea(xVelocity, yVelocity);
    }
    xVelocityRightBound = xVelocity;

    targetReachedCount += xVelocityRightBound - xVelocityLeftBound;
  }

  return targetReachedCount;

  function reachesTargetArea(xVelocity0: number, yVelocity0: number): boolean {
    let xVelocity1 = xVelocity0;
    let yVelocity1 = yVelocity0;
    let x = 0, y = 0;
    do {
      x += xVelocity1;
      y += yVelocity1;
      xVelocity1 -= Math.sign(xVelocity1);
      yVelocity1--;
      if (x0 <= x && x <= x1 && y0 <= y && y <= y1) {
        return true;
      }
    } while (y >= y0 && x < x1);
    return false;
  }
}
