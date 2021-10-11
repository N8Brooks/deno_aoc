import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day05.ts";

const data = await Deno.readTextFile("year2020/day05_data.txt");

Deno.test("part1(example1)", () => {
  assertEquals(part1("FBFBBFFRLR"), 357);
});

Deno.test("part1(example2)", () => {
  assertEquals(part1("BFFFBBFRRR"), 567);
});

Deno.test("part1(example3)", () => {
  assertEquals(part1("FFFBBBFRRR"), 119);
});

Deno.test("part1(example4)", () => {
  assertEquals(part1("BBFFBBFRLL"), 820);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 953);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 615);
});
