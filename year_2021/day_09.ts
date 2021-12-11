export function part1(input: string): number {
  const heightMap = input.split("\n").map((line) => line.split("").map(Number));
  let riskLevelSum = 0;
  for (let y = 0; y < heightMap.length; y++) {
    for (let x = 0; x < heightMap[0].length; x++) {
      const adjacentLocations = [
        heightMap[y - 1]?.[x] ?? 9,
        heightMap[y + 1]?.[x] ?? 9,
        heightMap[y]?.[x - 1] ?? 9,
        heightMap[y]?.[x + 1] ?? 9,
      ];
      const locationHeight = heightMap[y][x];
      if (adjacentLocations.every((height) => height > locationHeight)) {
        riskLevelSum += locationHeight + 1;
      }
    }
  }
  return riskLevelSum;
}

export function part2(input: string): number {
  const heightMap = input.split("\n").map((line) => line.split("").map(Number));
  const basinSizes: number[] = [];
  for (let y = 0; y < heightMap.length; y++) {
    for (let x = 0; x < heightMap[0].length; x++) {
      const adjacentLocations = [
        heightMap[y - 1]?.[x] ?? 9,
        heightMap[y + 1]?.[x] ?? 9,
        heightMap[y]?.[x - 1] ?? 9,
        heightMap[y]?.[x + 1] ?? 9,
      ];
      const locationHeight = heightMap[y][x];
      if (adjacentLocations.some((height) => height <= locationHeight)) {
        continue;
      }
      const seenLocations: Set<string> = new Set();
      const locationStack: [number, number][] = [[y, x]];
      while (locationStack.length) {
        const location = locationStack.shift() as [number, number];
        const [y, x] = location;
        const height = heightMap[y]?.[x] ?? 9;
        if (height === 9) {
          continue;
        }
        const locationKey = location.join();
        if (seenLocations.has(locationKey)) {
          continue;
        }
        seenLocations.add(locationKey);
        locationStack.push([y - 1, x], [y + 1, x], [y, x - 1], [y, x + 1]);
      }
      basinSizes.push(seenLocations.size);
    }
  }
  const [a, b, c] = basinSizes.sort((a, b) => b - a);
  return a * b * c;
}
