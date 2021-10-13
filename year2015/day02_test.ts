import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day02.ts";

const data = await Deno.readTextFile("year2015/day02_data.txt");

Deno.test("day02", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1("2x3x4"), 58);
    });

    await t.step("example2", () => {
      assertEquals(part1("1x1x10"), 43);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 1606483);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example1", () => {
      assertEquals(part2("2x3x4"), 34);
    });

    await t.step("example2", () => {
      assertEquals(part2("1x1x10"), 14);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 3842356);
    });
  });
});
