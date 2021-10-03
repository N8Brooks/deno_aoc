import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day09.ts";

const text = await Deno.readTextFile("year2015/day09.txt");

const example = `London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141
`;

Deno.test("part1(example)", () => {
  assertEquals(part1(example), 605);
});

Deno.test("part1(text)", () => {
  assertEquals(part1(text), 117);
});

Deno.test("part2(example)", () => {
  assertEquals(part2(example), 982);
});

Deno.test("part2(text)", () => {
  assertEquals(part2(text), 909);
});
