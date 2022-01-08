const RECORD_PATTERN = /\[\d{4}-\d{2}-\d{2} \d{2}:(\d{2})\] (.*)/;

const parseMinuteCounts = (input: string): Record<string, number[]> => {
  const minuteCounts: Record<string, number[]> = {};
  let guardId = "", fallsAsleepTime = NaN;
  for (const line of input.split("\n").sort()) {
    const [, timestamp, event] = line.match(RECORD_PATTERN)!;
    if (event === "wakes up") {
      const wakesUpTime = +timestamp;
      const counts = minuteCounts[guardId] ??= Array(60).fill(0);
      for (let time = fallsAsleepTime; time < wakesUpTime; time++) {
        counts[time]++;
      }
    } else if (event === "falls asleep") {
      fallsAsleepTime = +timestamp;
    } else {
      guardId = event.match(/Guard #(\d+)/)![1];
    }
  }
  return minuteCounts;
};

export function part1(input: string): number {
  const minuteCounts = parseMinuteCounts(input);
  const [chosenGuardId] = Object.entries(minuteCounts)
    .reduce((chosen, [guardId, counts]) => {
      const timeAsleep = counts.reduce((a, b) => a + b);
      return chosen[1] > timeAsleep ? chosen : [+guardId, timeAsleep];
    }, [NaN, -Infinity]);
  let maxMinuteCount = -Infinity;
  let chosenMinute = 0;
  minuteCounts[chosenGuardId].forEach((count, minute) => {
    if (count > maxMinuteCount) {
      maxMinuteCount = count;
      chosenMinute = minute;
    }
  });
  return chosenGuardId * chosenMinute;
}

export function part2(input: string): number {
  const minuteCounts = parseMinuteCounts(input);
  const [chosenGuardId, maxMinuteCount] = Object.entries(minuteCounts)
    .reduce((chosen, [guardId, counts]) => {
      const maxMinuteCount = Math.max(...counts);
      return chosen[1] > maxMinuteCount ? chosen : [+guardId, maxMinuteCount];
    }, [NaN, -Infinity]);
  const chosenMinute = minuteCounts[chosenGuardId].indexOf(maxMinuteCount);
  return chosenGuardId * chosenMinute;
}
