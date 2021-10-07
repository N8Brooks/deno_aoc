import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day01.ts";

const data = await Deno.readTextFile("year2016/day01_data.txt");

Deno.test("part1(example 1)", () => {
  assertEquals(part1("R2, L3"), 5);
});

Deno.test("part1(example 2)", () => {
  assertEquals(part1("R2, R2, R2"), 2);
});

Deno.test("part1(example 3)", () => {
  assertEquals(part1("R5, L5, R5, R3"), 12);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 161);
});

Deno.test("part2(example 1)", () => {
  assertEquals(part2("R8, R4, R4, R8"), 4);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 110);
});
