import { part1, part2 } from "./day_24.ts";

const input = await Deno.readTextFile("year_2020/testdata/day_24.txt");

Deno.bench("part 1", () => {
  part1(input);
});

Deno.bench("part 2", () => {
  part2(input);
});
