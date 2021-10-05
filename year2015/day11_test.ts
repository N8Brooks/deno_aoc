import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day11.ts";

const data = await Deno.readTextFile("year2015/day11_data.txt");

Deno.test("part1(example)", () => {
  assertEquals(part1("abcdefgh"), "abcdffaa");
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), "hxbxxyzz");
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), "hxcaabcc");
});
