import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day15.ts";

const data = await Deno.readTextFile("year2015/day15_data.txt");

const example =
  `Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8
Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3`;

Deno.test("part1(example)", () => {
  assertEquals(part1(example), 62842880);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 18965440);
});

Deno.test("part2(example)", () => {
  assertEquals(part2(example), 57600000);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 15862900);
});
