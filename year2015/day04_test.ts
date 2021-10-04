import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day04.ts";

const data = await Deno.readTextFile("year2015/day04_data.txt");

const example1 = "abcdef";

const example2 = "pqrstuv";

Deno.test("part1(example1)", () => {
  assertEquals(part1(example1), 609043);
});

Deno.test("part1(example2)", () => {
  assertEquals(part1(example2), 1048970);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 346386);
});

Deno.test("part2(example1)", () => {
  assertEquals(part2(example1), 6742839);
});

Deno.test("part2(example2)", () => {
  assertEquals(part2(example2), 5714438);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 9958218);
});
