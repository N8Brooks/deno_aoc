import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { lookSay, part1, part2 } from "./day10.ts";

const data = await Deno.readTextFile("year2015/day10_data.txt");

Deno.test("day10", async (t) => {
  await t.step("lookSay", async (t) => {
    await t.step("example1", () => {
      assertEquals(lookSay("1").join(""), "11");
    });

    await t.step("example2", () => {
      assertEquals(lookSay("11").join(""), "21");
    });

    await t.step("example3", () => {
      assertEquals(lookSay("21").join(""), "1211");
    });

    await t.step("example4", () => {
      assertEquals(lookSay("1211").join(""), "111221");
    });

    await t.step("example5", () => {
      assertEquals(lookSay("111221").join(""), "312211");
    });
  });

  await t.step("part1", async (t) => {
    await t.step("data", () => {
      assertEquals(part1(data), 252594);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("data", () => {
      assertEquals(part2(data), 3579328);
    });
  });
});
