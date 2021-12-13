import { chunk, zip } from "../deps.ts";

/** An object mapping visual dots to their corresponding letter */
const DOTS_TO_LETTER: Record<string, string> = {
  [".##..\n#..#.\n#....\n#....\n#..#.\n.##.."]: "C",
  ["####.\n#....\n###..\n#....\n#....\n####."]: "E",
  ["#..#.\n#..#.\n####.\n#..#.\n#..#.\n#..#."]: "H",
  ["#..#.\n#.#..\n##...\n#.#..\n#.#..\n#..#."]: "K",
  ["#####\n#...#\n#...#\n#...#\n#####\n....."]: "O",
  ["###..\n#..#.\n#..#.\n###..\n#....\n#...."]: "P",
  ["###..\n#..#.\n#..#.\n###..\n#.#..\n#..#."]: "R",
  ["####.\n...#.\n..#..\n.#...\n#....\n####."]: "Z",
};

/** Parse `dotsInput` from problem input to create `paper` */
const parseDotsInput = (dotsInput: string): boolean[][] => {
  let maxX = 0, maxY = 0;
  const dots = dotsInput.split("\n").map((dot) => {
    const [x, y] = dot.split(",").map((d) => +d);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
    return [y, x];
  });
  const paper: boolean[][] = Array.from(
    { length: maxY + 2 },
    () => Array(maxX + 1),
  );
  for (const [y, x] of dots) {
    paper[y][x] = true;
  }
  return paper;
};

/** Follow instruction to fold `paper` via side effects */
const foldPaper = (instruction: string, paper: boolean[][]): void => {
  const [, foldDirection, foldLocation] = instruction.match(/([x|y])=(\d+)/)!;
  const foldIndex = +foldLocation;
  if (foldDirection === "x") {
    for (let x = 0; x < foldIndex; x++) {
      for (let y = 0; y < paper.length; y++) {
        paper[y][x] ||= paper[y][2 * foldIndex - x];
      }
    }
    paper.forEach((line) => void (line.length = foldIndex));
  } else {
    for (let y = 0; y < foldIndex; y++) {
      for (let x = 0; x < paper[0].length; x++) {
        paper[y][x] ||= paper[2 * foldIndex - y][x];
      }
    }
    paper.length = foldIndex;
  }
};

export function part1(input: string): number {
  const [dotsInput, instructions] = input.split("\n\n");
  const [instruction] = instructions.split("\n");
  const paper = parseDotsInput(dotsInput);
  foldPaper(instruction, paper);
  let dotCount = 0;
  for (const line of paper) {
    for (const dot of line) {
      if (dot) {
        dotCount++;
      }
    }
  }
  return dotCount;
}

export function part2(input: string): string {
  const [dotsInput, instructions] = input.split("\n\n");
  const paper = parseDotsInput(dotsInput);
  for (const instruction of instructions.split("\n")) {
    foldPaper(instruction, paper);
  }
  const columns = zip(...paper);
  return chunk(columns, 5)
    .map((paper) => {
      return zip(...paper)
        .slice(0, 6)
        .map((line) => line.map((dot) => dot ? "#" : ".").join(""))
        .join("\n");
    })
    .map((dots) => DOTS_TO_LETTER[dots])
    .join("");
}
