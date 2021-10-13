import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day11.ts";

const example = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;

const data = await Deno.readTextFile("year2020/day11_data.txt");

Deno.test("day11", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1(example), 37);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 2178);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2(example), 26);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 1978);
    });
  });
});
