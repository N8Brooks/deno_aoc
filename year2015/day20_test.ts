import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day20.ts";

const data = await Deno.readTextFile("year2015/day20_data.txt");

Deno.test("part1(example)", () => {
  assertEquals(part1("70"), 4);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 776160);
});

Deno.test("part2(example)", () => {
  assertEquals(part2("70"), 6);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 786240);
});
