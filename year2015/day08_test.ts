import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day08.ts";

const data = await Deno.readTextFile("year2015/day08_data.txt");

Deno.test("day08", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1('""'), 2);
    });

    await t.step("example2", () => {
      assertEquals(part1('"abc"'), 2);
    });

    await t.step("example3", () => {
      assertEquals(part1('"aaa\\"aaa"'), 3);
    });

    await t.step("example4", () => {
      assertEquals(part1('"\\x27"'), 5);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 1333);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example1", () => {
      assertEquals(part2('""'), 4);
    });

    await t.step("example2", () => {
      assertEquals(part2('"abc"'), 4);
    });

    await t.step("example3", () => {
      assertEquals(part2('"aaa\\"aaa"'), 6);
    });

    await t.step("example4", () => {
      assertEquals(part2('"\\x27"'), 5);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 2046);
    });
  });
});
