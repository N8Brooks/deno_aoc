import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day17.ts";

const example = `20
15
10
5
5`;

const data = await Deno.readTextFile("year2015/day17_data.txt");

Deno.test("part1(example)", () => {
  assertEquals(part1(example, 25), 4);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data, 150), 654);
});

Deno.test("part2(example)", () => {
  assertEquals(part2(example, 25), 3);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data, 150), 57);
});
