import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day16.ts";

const data = await Deno.readTextFile("year2015/day16_data.txt");

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 213);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 323);
});
