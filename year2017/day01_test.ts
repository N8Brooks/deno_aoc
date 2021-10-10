import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day01.ts";

const data = await Deno.readTextFile("year2017/day01_data.txt");

Deno.test("part1(example 1)", () => {
  assertEquals(part1("1122"), 3);
});

Deno.test("part1(example 2)", () => {
  assertEquals(part1("1111"), 4);
});

Deno.test("part1(example 3)", () => {
  assertEquals(part1("1234"), 0);
});

Deno.test("part1(example 4)", () => {
  assertEquals(part1("91212129"), 9);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 1136);
});

Deno.test("part2(example 1)", () => {
  assertEquals(part2("1212"), 6);
});

Deno.test("part2(example 2)", () => {
  assertEquals(part2("1221"), 0);
});

Deno.test("part2(example 3)", () => {
  assertEquals(part2("123425"), 4);
});

Deno.test("part2(example 4)", () => {
  assertEquals(part2("123123"), 12);
});

Deno.test("part2(example 5)", () => {
  assertEquals(part2("12131415"), 4);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 1092);
});
