import { part1, part2 } from "./day_20.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_20.txt");

Deno.bench("part 1", () => {
  part1(input);
});

Deno.bench("part 2", () => {
  part2(input);
});
