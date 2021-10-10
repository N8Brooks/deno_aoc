import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day01.ts";

const data = await Deno.readTextFile("year2018/day01_data.txt");

Deno.test("part1(example 1)", () => {
  assertEquals(part1("+1 -2 +3 +1"), 3);
});

Deno.test("part1(example 2)", () => {
  assertEquals(part1("+1 +1 +1"), 3);
});

Deno.test("part1(example 3)", () => {
  assertEquals(part1("+1 +1 -2"), 0);
});

Deno.test("part1(example 4)", () => {
  assertEquals(part1("-1 -2 -3"), -6);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 599);
});

Deno.test("part2(example 1)", () => {
  assertEquals(part2("+1 -2 +3 +1"), 2);
});

Deno.test("part2(example 2)", () => {
  assertEquals(part2("+1 -1"), 0);
});

Deno.test("part2(example 3)", () => {
  assertEquals(part2("+3 +3 +4 -2 -4"), 10);
});

Deno.test("part2(example 4)", () => {
  assertEquals(part2("-6 +3 +8 +5 -6"), 5);
});

Deno.test("part2(example 5)", () => {
  assertEquals(part2("+7 +7 -2 -7 -4"), 14);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 81204);
});
