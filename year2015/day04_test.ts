import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day04.ts";

const data = await Deno.readTextFile("year2015/day04_data.txt");

const example1 = "abcdef";

const example2 = "pqrstuv";

Deno.test("day04", async (t) => {
  await t.step("example1", async (t) => {
    await t.step("example1", async () => {
      assertEquals(await part1(example1), 609043);
    });

    await t.step("example2", async () => {
      assertEquals(await part1(example1), 609043);
    });

    await t.step("data", async () => {
      assertEquals(await part1(data), 346386);
    });
  });

  await t.step("example1", async (t) => {
    await t.step("example1", async () => {
      assertEquals(await part2(example1), 6742839);
    });

    await t.step("example2", async () => {
      assertEquals(await part2(example2), 5714438);
    });

    await t.step("data", async () => {
      assertEquals(await part2(data), 9958218);
    });
  });
});
