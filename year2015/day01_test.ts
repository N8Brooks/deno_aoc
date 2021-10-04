import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day01.ts";

const data = await Deno.readTextFile("year2015/day01_data.txt");

Deno.test("part1(example 1)", () => {
  assertEquals(part1("(())"), 0);
});

Deno.test("part1(example 2)", () => {
  assertEquals(part1("()()"), 0);
});

Deno.test("part1(example 3)", () => {
  assertEquals(part1("((("), 3);
});

Deno.test("part1(example 4)", () => {
  assertEquals(part1("(()(()("), 3);
});

Deno.test("part1(example 5)", () => {
  assertEquals(part1("))((((("), 3);
});

Deno.test("part1(example 6)", () => {
  assertEquals(part1("())"), -1);
});

Deno.test("part1(example 7)", () => {
  assertEquals(part1("))("), -1);
});

Deno.test("part1(example 8)", () => {
  assertEquals(part1(")))"), -3);
});

Deno.test("part1(example 9)", () => {
  assertEquals(part1(")())())"), -3);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 232);
});

Deno.test("part2(example 1)", () => {
  assertEquals(part2(")"), 1);
});

Deno.test("part2(example 2)", () => {
  assertEquals(part2("()())"), 5);
});

Deno.test("part2(invalid)", () => {
  assertThrows(() => part2("(((("));
});

Deno.test("part2(example 2)", () => {
  assertEquals(part2(data), 1783);
});
