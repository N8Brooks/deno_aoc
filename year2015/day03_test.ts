import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day03.ts";

const data = await Deno.readTextFile("year2015/day03_data.txt");

Deno.test("part1(example 1)", () => {
  assertEquals(part1(">"), 2);
});

Deno.test("part1(example 2)", () => {
  assertEquals(part1("^>v<"), 4);
});

Deno.test("part1(example 3)", () => {
  assertEquals(part1("^v^v^v^v^v"), 2);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 2081);
});

Deno.test("part2(example 1)", () => {
  assertEquals(part2(">v"), 3);
});

Deno.test("part2(example 2)", () => {
  assertEquals(part2("^>v<"), 3);
});

Deno.test("part2(example 3)", () => {
  assertEquals(part2("^v^v^v^v^v"), 11);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 2341);
});
