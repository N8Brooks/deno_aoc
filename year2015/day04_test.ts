import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day04.ts";

const text = await Deno.readTextFile("year2015/day04.txt");

const example1 = "abcdef";

const example2 = "pqrstuv";

Deno.test("part1(example1)", () => {
  assertEquals(part1(example1), 609043);
});

Deno.test("part1(example2)", () => {
  assertEquals(part1(example2), 1048970);
});

Deno.test("part1(text)", () => {
  assertEquals(part1(text), 346386);
});

Deno.test("part2(example1)", () => {
  assertEquals(part2(example1), 6742839);
});

Deno.test("part2(example2)", () => {
  assertEquals(part2(example2), 5714438);
});

Deno.test("part2(text)", () => {
  assertEquals(part2(text), 9958218);
});
