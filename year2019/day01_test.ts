import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day01.ts";

const data = await Deno.readTextFile("year2019/day01_data.txt");

Deno.test("part1(example 1)", () => {
  assertEquals(part1("12"), 2);
});

Deno.test("part1(example 2)", () => {
  assertEquals(part1("14"), 2);
});

Deno.test("part1(example 3)", () => {
  assertEquals(part1("1969"), 654);
});

Deno.test("part1(example 4)", () => {
  assertEquals(part1("100756"), 33583);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 3408471);
});

Deno.test("part2(example 1)", () => {
  assertEquals(part2("14"), 2);
});

Deno.test("part2(example 2)", () => {
  assertEquals(part2("1969"), 966);
});

Deno.test("part2(example 3)", () => {
  assertEquals(part2("100756"), 50346);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 5109803);
});
