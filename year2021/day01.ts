export function part1(input: string): number {
  let previousDepth = Infinity;
  let depthIncreaseCount = 0;
  for (const currentDepth of input.split("\n").map(Number)) {
    if (currentDepth > previousDepth) {
      depthIncreaseCount++;
    }
    previousDepth = currentDepth;
  }
  return depthIncreaseCount;
}

export function part2(input: string): number {
  const nums = input.split("\n").map(Number);
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
