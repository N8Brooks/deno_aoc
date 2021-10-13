import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day09.ts";

const data = await Deno.readTextFile("year2015/day09_data.txt");

const example = `London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141
`;

Deno.test("day09", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1(example), 605);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 117);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2(example), 982);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 909);
    });
  });
});
