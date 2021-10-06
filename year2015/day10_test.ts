import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { lookSay, part1, part2 } from "./day10.ts";

const data = await Deno.readTextFile("year2015/day10_data.txt");

Deno.test("lookSay(example 1)", () => {
  assertEquals(lookSay("1").join(""), "11");
});

Deno.test("lookSay(example 2)", () => {
  assertEquals(lookSay("1").join(""), "11");
});

Deno.test("lookSay(example 3)", () => {
  assertEquals(lookSay("1").join(""), "11");
});

Deno.test("lookSay(example 4)", () => {
  assertEquals(lookSay("1").join(""), "11");
});

Deno.test("lookSay(example 5)", () => {
  assertEquals(lookSay("1").join(""), "11");
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 252594);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 3579328);
});
