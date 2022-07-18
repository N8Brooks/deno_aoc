import { part1, part2 } from "./day_17.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_17.txt");

Deno.bench("part 1", () => {
  part1(input, 150);
});

Deno.bench("part 2", () => {
  part2(input, 150);
});
