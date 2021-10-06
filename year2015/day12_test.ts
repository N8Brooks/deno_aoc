import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day12.ts";

const data = await Deno.readTextFile("year2015/day12_data.txt");

Deno.test("part1(example 1)", () => {
  assertEquals(part1("[1,2,3]"), 6);
});

Deno.test("part1(example 2)", () => {
  assertEquals(part1('{"a":2,"b":4}'), 6);
});

Deno.test("part1(example 3)", () => {
  assertEquals(part1("[[[3]]]"), 3);
});

Deno.test("part1(example 4)", () => {
  assertEquals(part1('{"a":{"b":4},"c":-1}'), 3);
});

Deno.test("part1(example 5)", () => {
  assertEquals(part1('{"a":[-1,1]}'), 0);
});

Deno.test("part1(example 6)", () => {
  assertEquals(part1('[-1,{"a":1}]'), 0);
});

Deno.test("part1(example 7)", () => {
  assertEquals(part1("[]"), 0);
});

Deno.test("part1(example 8)", () => {
  assertEquals(part1("{}"), 0);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 191164);
});

Deno.test("part2(example 1)", () => {
  assertEquals(part2("[1,2,3]"), 6);
});

Deno.test("part2(example 2)", () => {
  assertEquals(part2('[1,{"c":"red","b":2},3]'), 4);
});

Deno.test("part2(example 3)", () => {
  assertEquals(part2('{"d":"red","e":[1,2,3,4],"f":5}'), 0);
});

Deno.test("part2(example 4)", () => {
  assertEquals(part2('[1,"red",5]'), 6);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 87842);
});
