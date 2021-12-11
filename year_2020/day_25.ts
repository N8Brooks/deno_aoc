import { pow } from "../util.ts";

const N = 20201227;

const M = Math.ceil((N - 1) ** 0.5);

const babyStepGiantStep = (base: number): number => {
  const ajs: Map<number, number> = new Map();
  let aj = 1;
  for (let j = 0; j < M; j++) {
    ajs.set(aj, j);
    aj = 7 * aj % N;
  }

  const c = pow(7, M * (N - 2), N);
  for (let i = 0; i < M; i++) {
    const y = (base * pow(c, i, N)) % N;
    if (ajs.has(y)) {
      return i * M + ajs.get(y)!;
    }
  }

  return NaN;
};

export function part1(input: string): number {
  const [ec, ed] = input.split("\n").map((d) => +d);
  return pow(ec, babyStepGiantStep(ed), N);
}
