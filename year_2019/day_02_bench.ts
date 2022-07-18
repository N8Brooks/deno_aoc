import { part1, part2 } from "./day_02.ts";

const input = await Deno.readTextFile("year_2019/testdata/day_02.txt");

Deno.bench("part 1", () => {
  part1(input);
});

Deno.bench("part 2", () => {
  part2(input);
});
