import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day02.ts";

const example1 = `5 1 9 5
7 5 3
2 4 6 8`;

const example2 = `5 9 2 8
9 4 7 3
3 8 6 5`;

const data = await Deno.readTextFile("year2017/day02_data.txt");

Deno.test("day02", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1(example1), 18);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 51833);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example2", () => {
      assertEquals(part2(example2), 9);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 288);
    });
  });
});
