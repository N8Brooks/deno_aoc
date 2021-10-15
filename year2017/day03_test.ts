import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day03.ts";

const data = await Deno.readTextFile("year2017/day03_data.txt");

Deno.test("day03", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1("1"), 0);
    });

    await t.step("example2", () => {
      assertEquals(part1("12"), 3);
    });

    await t.step("example3", () => {
      assertEquals(part1("23"), 2);
    });

    await t.step("example4", () => {
      assertEquals(part1("1024"), 31);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 480);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("data", () => {
      assertEquals(part2(data), 349975);
    });
  });
});
