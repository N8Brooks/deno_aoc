import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day18.ts";

const example = `.#.#.#
...##.
#....#
..#...
#.#..#
####..`;

const data = await Deno.readTextFile("year2015/day18_data.txt");

Deno.test("day18", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1(example, 4), 4);
    });

    await t.step("data", () => {
      assertEquals(part1(data, 100), 1061);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2(example, 5), 17);
    });

    await t.step("data", () => {
      assertEquals(part2(data, 100), 1006);
    });
  });
});
