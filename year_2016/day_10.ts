const balanceBots = (input: string) => {
  const stack: number[] = [];
  const values: number[][] = [];
  for (
    const [, value, bot] of input.matchAll(/value (\d+) goes to bot (\d+)/g)
  ) {
    appendValue(+bot, +value);
  }

  const transfers: [string, number, string, number][] = [];
  for (
    const [, bot, lowBin, lowBot, highBin, highBot] of input.matchAll(
      /bot (\d+) gives low to (bot|output) (\d+) and high to (bot|output) (\d+)/g,
    )
  ) {
    transfers[+bot] = [lowBin, +lowBot, highBin, +highBot];
  }

  let identifiedBot = NaN;
  const outputs: number[] = [];
  while (stack.length) {
    const bot = stack.shift()!;
    const [lowBin, lowBot, highBin, highBot] = transfers[bot];
    const [lowValue, highValue] = values[bot]
      .splice(0, 2)
      .sort((a, b) => a - b);
    if (lowValue === 17 && highValue === 61) {
      identifiedBot = bot;
    }
    if (lowBin === "bot") {
      appendValue(lowBot, lowValue);
    } else {
      outputs[lowBot] = lowValue;
    }
    if (highBin === "bot") {
      appendValue(highBot, highValue);
    } else {
      outputs[highBot] = highValue;
    }
  }

  return {
    part1: identifiedBot,
    part2: outputs[0] * outputs[1] * outputs[2],
  };

  function appendValue(bot: number, value: number) {
    const bin = values[bot] ??= [];
    bin.push(+value);
    if (bin.length === 2) {
      stack.push(+bot);
    }
  }
};

export function part1(input: string): number {
  return balanceBots(input).part1;
}

export function part2(input: string): number {
  return balanceBots(input).part2;
}
