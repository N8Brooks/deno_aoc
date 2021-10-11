import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day18.ts";

const example = `.#.#.#
...##.
#....#
..#...
#.#..#
####..`;

const data = await Deno.readTextFile("year2015/day18_data.txt");

Deno.test("part1(example)", () => {
  assertEquals(part1(example, 4), 4);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data, 100), 1061);
});

Deno.test("part2(example)", () => {
  assertEquals(part2(example, 5), 17);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data, 100), 1006);
});
