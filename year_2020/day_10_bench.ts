import { part1, part2 } from "./day_10.ts";

const input = await Deno.readTextFile("year_2020/testdata/day_10.txt");

Deno.bench("part 1", () => {
  part1(input);
});

Deno.bench("part 2", () => {
  part2(input);
});
