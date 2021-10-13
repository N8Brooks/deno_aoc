import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day18.ts";

const data = await Deno.readTextFile("year2020/day18_data.txt");

Deno.test("day18", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1("1 + 2 * 3 + 4 * 5 + 6"), 71);
    });

    await t.step("example2", () => {
      assertEquals(part1("1 + (2 * 3) + (4 * (5 + 6))"), 51);
    });

    await t.step("example3", () => {
      assertEquals(part1("2 * 3 + (4 * 5)"), 26);
    });

    await t.step("example4", () => {
      assertEquals(part1("5 + (8 * 3 + 9 + 3 * 4 * 3)"), 437);
    });

    await t.step("example5", () => {
      assertEquals(part1("5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))"), 12240);
    });

    await t.step("example6", () => {
      assertEquals(
        part1("((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"),
        13632,
      );
    });

    await t.step("data", () => {
      assertEquals(part1(data), 8929569623593);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example1", () => {
      assertEquals(part2("1 + 2 * 3 + 4 * 5 + 6"), 231);
    });

    await t.step("example2", () => {
      assertEquals(part2("1 + (2 * 3) + (4 * (5 + 6))"), 51);
    });

    await t.step("example3", () => {
      assertEquals(part2("2 * 3 + (4 * 5)"), 46);
    });

    await t.step("example4", () => {
      assertEquals(part2("5 + (8 * 3 + 9 + 3 * 4 * 3)"), 1445);
    });

    await t.step("example5", () => {
      assertEquals(part2("5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))"), 669060);
    });

    await t.step("example6", () => {
      assertEquals(
        part2("((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"),
        23340,
      );
    });

    await t.step("data", () => {
      assertEquals(part2(data), 231235959382961);
    });
  });
});
