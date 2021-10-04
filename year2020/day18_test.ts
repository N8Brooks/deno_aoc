import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day18.ts";

const data = await Deno.readTextFile("year2020/day18_data.txt");

Deno.test("part1(example 1)", () => {
  assertEquals(part1("1 + 2 * 3 + 4 * 5 + 6"), 71);
});

Deno.test("part1(example 2)", () => {
  assertEquals(part1("1 + (2 * 3) + (4 * (5 + 6))"), 51);
});

Deno.test("part1(example 3)", () => {
  assertEquals(part1("2 * 3 + (4 * 5)"), 26);
});

Deno.test("part1(example 4)", () => {
  assertEquals(part1("5 + (8 * 3 + 9 + 3 * 4 * 3)"), 437);
});

Deno.test("part1(example 5)", () => {
  assertEquals(part1("5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))"), 12240);
});

Deno.test("part1(example 6)", () => {
  assertEquals(part1("((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"), 13632);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 8929569623593);
});

Deno.test("part2(example 1)", () => {
  assertEquals(part2("1 + 2 * 3 + 4 * 5 + 6"), 231);
});

Deno.test("part2(example 2)", () => {
  assertEquals(part2("1 + (2 * 3) + (4 * (5 + 6))"), 51);
});

Deno.test("part2(example 3)", () => {
  assertEquals(part2("2 * 3 + (4 * 5)"), 46);
});

Deno.test("part2(example 4)", () => {
  assertEquals(part2("5 + (8 * 3 + 9 + 3 * 4 * 3)"), 1445);
});

Deno.test("part2(example 5)", () => {
  assertEquals(part2("5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))"), 669060);
});

Deno.test("part2(example 6)", () => {
  assertEquals(part2("((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"), 23340);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 231235959382961);
});
