import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day04.ts";

const data = await Deno.readTextFile("year2016/day04_data.txt");

const example1 = `aaaaa-bbb-z-y-x-123[abxyz]
a-b-c-d-e-f-g-h-987[abcde]
not-a-real-room-404[oarel]
totally-real-room-200[decoy]`;

Deno.test("day04", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1(example1), 1514);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 361724);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("data", () => {
      assertEquals(part2(data), 482);
    });
  });
});
