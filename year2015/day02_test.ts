import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day02.ts";

const data = await Deno.readTextFile("year2015/day02_data.txt");

Deno.test("part1(example 1)", () => {
  assertEquals(part1("2x3x4"), 58);
});

Deno.test("part1(example 2", () => {
  assertEquals(part1("1x1x10"), 43);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 1606483);
});

Deno.test("part2(example 1)", () => {
  assertEquals(part2("2x3x4"), 34);
});

Deno.test("part2(example 2)", () => {
  assertEquals(part2("1x1x10"), 14);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 3842356);
});
