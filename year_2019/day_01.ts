export function part1(input: string): number {
  return input
    .split("\n")
    .reduce((sum, mass) => sum + Math.floor(+mass / 3) - 2, 0);
}

export function part2(input: string): number {
  return input
    .split("\n")
    .reduce((sum, line) => {
      let fuel = 0;
      let mass = Math.floor(+line / 3) - 2;
      while (mass > 0) {
        fuel += mass;
        mass = Math.floor(mass / 3) - 2;
      }
      return sum + fuel;
    }, 0);
}
