import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day17.ts";

const example = `20
15
10
5
5`;

const data = await Deno.readTextFile("year2015/day17_data.txt");

Deno.test("day17", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1(example, 25), 4);
    });

    await t.step("data", () => {
      assertEquals(part1(data, 150), 654);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2(example, 25), 3);
    });

    await t.step("data", () => {
      assertEquals(part2(data, 150), 57);
    });
  });
});
