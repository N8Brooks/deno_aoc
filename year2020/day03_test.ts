import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day03.ts";

const example = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

const data = await Deno.readTextFile("year2020/day03_data.txt");

Deno.test("part1(example)", () => {
  assertEquals(part1(example), 7);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 207);
});

Deno.test("part2(example)", () => {
  assertEquals(part2(example), 336);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 2655892800);
});
