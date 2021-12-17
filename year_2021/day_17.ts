export function part1(input: string): number {
  const y0 = +input.match(/y=(-?\d+)/)![1];
  return y0 * (y0 - Math.sign(y0)) / 2;
}

export function part2(input: string): number {
  const [x0, x1, y0, y1] = [...input.matchAll(/[\d\-]+/g)].map((d) => +d);
  let targetReachedCount = 0;

  const minimumXVelocity = Math.ceil((Math.sqrt(8 * x0) - 1) / 2);
  const maximumXVelocity = x1;

  const minimumYVelocity = y0;
  const maximumYVelocity = -1 - y0;

  for (
    let xVelocity0 = minimumXVelocity;
    xVelocity0 <= maximumXVelocity;
    xVelocity0++
  ) {
    for (
      let yVelocity0 = minimumYVelocity;
      yVelocity0 <= maximumYVelocity;
      yVelocity0++
    ) {
      let xVelocity1 = xVelocity0;
      let yVelocity1 = yVelocity0;
      let x = 0, y = 0;
      do {
        x += xVelocity1;
        y += yVelocity1;
        xVelocity1 -= Math.sign(xVelocity1);
        yVelocity1--;
        if (x0 <= x && x <= x1 && y0 <= y && y <= y1) {
          targetReachedCount++;
          break;
        }
      } while (y >= y0 && x < x1);
    }
  }

  return targetReachedCount;
}
