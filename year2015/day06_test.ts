import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day06.ts";

const data = await Deno.readTextFile("year2015/day06_data.txt");

Deno.test("day06", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1("turn on 0,0 through 999,999"), 1000000);
    });

    await t.step("example2", () => {
      assertEquals(part1("toggle 0,0 through 999,0"), 1000);
    });

    await t.step("example3", () => {
      assertEquals(part1("turn off 499,499 through 500,500"), 0);
    });

    await t.step("example4", () => {
      assertEquals(part1("turn on 0,0 through 0,0"), 1);
    });

    await t.step("example5", () => {
      assertEquals(part1("toggle 0,0 through 999,999"), 1000000);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 543903);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example1", () => {
      assertEquals(part2("turn on 0,0 through 999,999"), 1000000);
    });

    await t.step("example2", () => {
      assertEquals(part2("toggle 0,0 through 999,0"), 2000);
    });

    await t.step("example3", () => {
      assertEquals(part2("turn off 499,499 through 500,500"), 0);
    });

    await t.step("example4", () => {
      assertEquals(part2("turn on 0,0 through 0,0"), 1);
    });

    await t.step("example5", () => {
      assertEquals(part2("toggle 0,0 through 999,999"), 2000000);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 14687245);
    });
  });
});
