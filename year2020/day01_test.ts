import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day01.ts";

const example = `1721
979
366
299
675
1456`;

const data = await Deno.readTextFile("year2020/day01_data.txt");

Deno.test("part1(example)", () => {
  assertEquals(part1(example), 514579);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 482811);
});

Deno.test("part2(example)", () => {
  assertEquals(part2(example), 241861950);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 193171814);
});
