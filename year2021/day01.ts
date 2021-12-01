export function part1(data: string): number {
  let previousDepth = Infinity;
  let depthIncreaseCount = 0;
  for (const currentDepth of data.split("\n").map(Number)) {
    if (currentDepth > previousDepth) {
      depthIncreaseCount++;
    }
    previousDepth = currentDepth;
  }
  return depthIncreaseCount;
}

export function part2(data: string): number {
  const nums = data.split("\n").map(Number);
  let previousSum = nums[0] + nums[1] + nums[2];
  let depthIncreaseCount = 0;
  for (let i = 3; i < nums.length; i++) {
    const currentSum = previousSum + nums[i] - nums[i - 3];
    if (currentSum > previousSum) {
      depthIncreaseCount++;
    }
    previousSum = currentSum;
  }
  return depthIncreaseCount;
}
