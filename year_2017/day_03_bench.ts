import { part1, part2 } from "./day_03.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_03.txt");

Deno.bench("part 1", () => {
  part1(input);
});

Deno.bench("part 2", () => {
  part2(input);
});
