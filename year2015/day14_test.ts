import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day14.ts";

const data = await Deno.readTextFile("year2015/day14_data.txt");

const example =
  `Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.`;

Deno.test("day14", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1(example, 1000), 1120);
    });

    await t.step("data", () => {
      assertEquals(part1(data, 2503), 2696);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2(example, 1000), 689);
    });

    await t.step("data", () => {
      assertEquals(part2(data, 2503), 1084);
    });
  });
});
