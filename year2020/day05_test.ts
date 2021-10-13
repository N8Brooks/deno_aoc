import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day05.ts";

const data = await Deno.readTextFile("year2020/day05_data.txt");

Deno.test("day05", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1("FBFBBFFRLR"), 357);
    });

    await t.step("example2", () => {
      assertEquals(part1("BFFFBBFRRR"), 567);
    });

    await t.step("example3", () => {
      assertEquals(part1("FFFBBBFRRR"), 119);
    });

    await t.step("example4", () => {
      assertEquals(part1("BBFFBBFRLL"), 820);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 953);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("data", () => {
      assertEquals(part2(data), 615);
    });
  });
});
