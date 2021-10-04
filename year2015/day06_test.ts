import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day06.ts";

const data = await Deno.readTextFile("year2015/day06_data.txt");

Deno.test("part1(example 1)", () => {
  assertEquals(part1("turn on 0,0 through 999,999"), 1000000);
});

Deno.test("part1(example 2)", () => {
  assertEquals(part1("toggle 0,0 through 999,0"), 1000);
});

Deno.test("part1(example 3)", () => {
  assertEquals(part1("turn off 499,499 through 500,500"), 0);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 543903);
});

Deno.test("part2(example 1)", () => {
  assertEquals(part2("turn on 0,0 through 0,0"), 1);
});

Deno.test("part2(example 2)", () => {
  assertEquals(part2("toggle 0,0 through 999,999"), 2000000);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 14687245);
});

Deno.test("part2(toggle off)", () => {
  assertEquals(part2("turn off 0,0 through 0,0"), 0);
});
