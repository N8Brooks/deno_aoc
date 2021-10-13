import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day01.ts";

const data = await Deno.readTextFile("year2019/day01_data.txt");

Deno.test("day01", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1("12"), 2);
    });

    await t.step("example2", () => {
      assertEquals(part1("14"), 2);
    });

    await t.step("example3", () => {
      assertEquals(part1("1969"), 654);
    });

    await t.step("example4", () => {
      assertEquals(part1("100756"), 33583);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 3408471);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example1", () => {
      assertEquals(part2("12"), 2);
    });

    await t.step("example2", () => {
      assertEquals(part2("14"), 2);
    });

    await t.step("example3", () => {
      assertEquals(part2("1969"), 966);
    });

    await t.step("example4", () => {
      assertEquals(part2("100756"), 50346);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 5109803);
    });
  });
});
