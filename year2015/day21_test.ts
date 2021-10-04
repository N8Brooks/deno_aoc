import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day21.ts";

const text = await Deno.readTextFile("year2015/day21_data.txt");

Deno.test("part1(example)", () => {
  assertEquals(part1("8 5 5", 12), 65);
});

Deno.test("part1(text)", () => {
  assertEquals(part1(text, 100), 111);
});

Deno.test("part2(example)", () => {
  assertEquals(part2("6 7 2", 8), 88);
});

Deno.test("part2(text)", () => {
  assertEquals(part2(text, 100), 188);
});
