const CHAR_CODE_A = "a".charCodeAt(0);

type DanceMove =
  | ["s", number]
  | ["x", number, number]
  | ["p", string, string];

const parseDanceMoves = (input: string): DanceMove[] => {
  return input
    .split(",")
    .map((line): DanceMove => {
      const move = line[0];
      const rest = line.substring(1);
      switch (move) {
        case "s":
          return ["s", +rest];
        case "x":
          return ["x", ...rest.split("/").map((d) => +d) as [number, number]];
        case "p":
          return ["p", ...rest.split("/") as [string, string]];
        default:
          throw Error("Unknown dance move");
      }
    });
};

const dance = (order: string, danceMoves: DanceMove[]): string => {
  const programs = order.split("");
  for (const [move, a, b] of danceMoves) {
    if (move === "s") {
      for (let i = 0; i < a; i++) {
        programs.unshift(programs.pop()!);
      }
    } else if (move === "x") {
      [programs[a as number], programs[b as number]] = [
        programs[b as number],
        programs[a as number],
      ];
    } else {
      const [i, j] = [
        programs.indexOf(a as string),
        programs.indexOf(b as string),
      ];
      [programs[i], programs[j]] = [programs[j], programs[i]];
    }
  }
  return programs.join("");
};

export function part1(input: string, length = 16): string {
  const programs = Array.from(
    { length },
    (_, i) => String.fromCharCode(i + CHAR_CODE_A),
  ).join("");
  const danceMoves = parseDanceMoves(input);
  return dance(programs, danceMoves);
}

export function part2(input: string, length = 16): string {
  let programs = Array.from(
    { length },
    (_, i) => String.fromCharCode(i + CHAR_CODE_A),
  ).join("");
  const danceMoves = parseDanceMoves(input);
  const previousPrograms: string[] = [];
  do {
    previousPrograms.push(programs);
    programs = dance(programs, danceMoves);
  } while (previousPrograms[0] !== programs);
  return previousPrograms[1e9 % previousPrograms.length];
}
