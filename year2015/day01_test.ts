import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day01.ts";

const data = await Deno.readTextFile("year2015/day01_data.txt");

Deno.test("day01", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1("(())"), 0);
    });

    await t.step("example2", () => {
      assertEquals(part1("()()"), 0);
    });

    await t.step("example3", () => {
      assertEquals(part1("((("), 3);
    });

    await t.step("example4", () => {
      assertEquals(part1("(()(()("), 3);
    });

    await t.step("example5", () => {
      assertEquals(part1("))((((("), 3);
    });

    await t.step("example6", () => {
      assertEquals(part1("())"), -1);
    });

    await t.step("example7", () => {
      assertEquals(part1("))("), -1);
    });

    await t.step("example8", () => {
      assertEquals(part1(")))"), -3);
    });

    await t.step("example9", () => {
      assertEquals(part1(")())())"), -3);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 232);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example10", () => {
      assertEquals(part2(")"), 1);
    });

    await t.step("example11", () => {
      assertEquals(part2("()())"), 5);
    });

    await t.step("invalid", () => {
      assertThrows(() => part2("(((("));
    });

    await t.step("data", () => {
      assertEquals(part2(data), 1783);
    });
  });
});
