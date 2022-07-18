import { part1, part2 } from "./day_15.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_15.txt");

Deno.bench("part 1", () => {
  part1(input);
});

Deno.bench("part 2", () => {
  part2(input);
});
