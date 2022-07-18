import { part1, part2 } from "./day_12.ts";

const input = await Deno.readTextFile("year_2016/testdata/day_12.txt");

Deno.bench("part 1", () => {
  part1(input);
});

Deno.bench("part 2", () => {
  part2(input);
});
