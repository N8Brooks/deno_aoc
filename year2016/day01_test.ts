import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day01.ts";

const data = await Deno.readTextFile("year2016/day01_data.txt");

Deno.test("day01", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1("R2, L3"), 5);
    });

    await t.step("example2", () => {
      assertEquals(part1("R2, R2, R2"), 2);
    });

    await t.step("example3", () => {
      assertEquals(part1("R5, L5, R5, R3"), 12);
    });

    await t.step("example4", () => {
      assertEquals(part1("R8, R4, R4, R8"), 8);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 161);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example1", () => {
      assertEquals(part2("R2, L3"), 5);
    });

    await t.step("example2", () => {
      assertEquals(part2("R2, R2, R2"), 2);
    });

    await t.step("example3", () => {
      assertEquals(part2("R5, L5, R5, R3"), 12);
    });

    await t.step("example4", () => {
      assertEquals(part2("R8, R4, R4, R8"), 4);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 110);
    });
  });
});
