import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day01.ts";

const data = await Deno.readTextFile("year2017/day01_data.txt");

Deno.test("day01", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1("1122"), 3);
    });

    await t.step("example2", () => {
      assertEquals(part1("1111"), 4);
    });

    await t.step("example3", () => {
      assertEquals(part1("1234"), 0);
    });

    await t.step("example4", () => {
      assertEquals(part1("91212129"), 9);
    });

    await t.step("example5", () => {
      assertEquals(part1("12131415"), 0);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 1136);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example1", () => {
      assertEquals(part2("1212"), 6);
    });

    await t.step("example2", () => {
      assertEquals(part2("1221"), 0);
    });

    await t.step("example3", () => {
      assertEquals(part2("123425"), 4);
    });

    await t.step("example4", () => {
      assertEquals(part2("123123"), 12);
    });

    await t.step("example5", () => {
      assertEquals(part2("12131415"), 4);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 1092);
    });
  });
});
