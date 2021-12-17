export function part1(input: string): number {
  const [lowerBound, upperBound] = input.split("-").map((d) => +d);
  let validPasswordCount = 0;
  for (let i = 1; i < 10; i++) {
    const start = Math.max(111_111 * i, lowerBound);
    const stop = Math.min(100_000 * (i + 1) - 1, upperBound);
    for (let password = start; password <= stop; password++) {
      let previousRemainder = NaN;
      let quotient = password;
      let isValid = false;
      while (quotient) {
        const currentRemainder = quotient % 10;
        if (previousRemainder === currentRemainder) {
          isValid = true;
        } else if (currentRemainder > previousRemainder) {
          isValid = false;
          break;
        }
        quotient = ~~(quotient / 10);
        previousRemainder = currentRemainder;
      }
      if (isValid) {
        validPasswordCount++;
      }
    }
  }
  return validPasswordCount;
}

export function part2(input: string): number {
  const [lowerBound, upperBound] = input.split("-").map((d) => +d);
  let validPasswordCount = 0;
  for (let i = 1; i < 10; i++) {
    const start = Math.max(111_111 * i, lowerBound);
    const stop = Math.min(100_000 * (i + 1) - 1, upperBound);
    for (let password = start; password <= stop; password++) {
      let previousRemainder = NaN;
      let quotient = password;
      let isValid = false;
      let repeatCount = 1;
      loop: {
        while (quotient) {
          const currentRemainder = quotient % 10;
          if (currentRemainder > previousRemainder) {
            break loop;
          } else if (previousRemainder === currentRemainder) {
            repeatCount++;
          } else {
            isValid ||= repeatCount === 2;
            repeatCount = 1;
          }
          quotient = ~~(quotient / 10);
          previousRemainder = currentRemainder;
        }
        if (isValid || repeatCount === 2) {
          validPasswordCount++;
        }
      }
    }
  }
  return validPasswordCount;
}
