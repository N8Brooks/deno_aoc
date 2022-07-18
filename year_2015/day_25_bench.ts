import { part1 } from "./day_25.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_25.txt");

Deno.bench("part 1", () => {
  part1(input);
});
