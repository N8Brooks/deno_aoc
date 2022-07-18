import { part1, part2 } from "./day_13.ts";

const input = await Deno.readTextFile("year_2016/testdata/day_13.txt");

Deno.bench("part 1", () => {
  part1(input, [31, 39]);
});

Deno.bench("part 2", () => {
  part2(input);
});
