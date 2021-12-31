export function part1(input: string): number {
  let score = 0;
  for (const line of input.split("\n")) {
    let depth = 0, i = 0, isGarbage = false;
    while (i < line.length) {
      switch (line[i]) {
        case "!":
          i += 2;
          continue;
        case "<":
          isGarbage = true;
          break;
        case ">":
          isGarbage = false;
          break;
        case "}":
          if (!isGarbage) {
            score += depth;
            depth--;
          }
          break;
        case "{":
          if (!isGarbage) {
            depth++;
          }
      }
      i++;
    }
  }
  return score;
}

export function part2(input: string): number {
  let garbageCount = 0;
  for (const line of input.split("\n")) {
    let i = 0, isGarbage = false;
    while (i < line.length) {
      switch (line[i]) {
        case "!":
          i += 2;
          continue;
        case "<":
          if (isGarbage) {
            garbageCount++;
          }
          isGarbage = true;
          break;
        case ">":
          isGarbage = false;
          break;
        default:
          if (isGarbage) {
            garbageCount++;
          }
      }
      i++;
    }
  }
  return garbageCount;
}
