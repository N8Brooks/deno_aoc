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

Deno.test("day03", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1(example), 7);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 207);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2(example), 336);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 2655892800);
    });
  });
});
