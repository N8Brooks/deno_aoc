import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day02.ts";

const data = await Deno.readTextFile("year2016/day02_data.txt");

const example = `ULL
RRDDD
LURDL
UUUUD`;

Deno.test("part1(example)", () => {
  assertEquals(part1(example), "1985");
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), "24862");
});

Deno.test("part2(example)", () => {
  assertEquals(part2(example), "5DB3");
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), "46C91");
});
