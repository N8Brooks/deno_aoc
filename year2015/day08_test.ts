import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day08.ts";

const data = await Deno.readTextFile("year2015/day08_data.txt");

Deno.test("part1(example 1)", () => {
  assertEquals(part1('""'), 2);
});

Deno.test("part1(example 2)", () => {
  assertEquals(part1('"abc"'), 2);
});

Deno.test("part1(example 3)", () => {
  assertEquals(part1('"aaa\\"aaa"'), 3);
});

Deno.test("part1(example 4)", () => {
  assertEquals(part1('"\\x27"'), 5);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 1333);
});

Deno.test("part2(example 1)", () => {
  assertEquals(part2('""'), 4);
});

Deno.test("part2(example 2)", () => {
  assertEquals(part2('"abc"'), 4);
});

Deno.test("part2(example 3)", () => {
  assertEquals(part2('"aaa\\"aaa"'), 6);
});

Deno.test("part2(example 4)", () => {
  assertEquals(part2('"\\x27"'), 5);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 2046);
});
