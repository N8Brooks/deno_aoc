import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day03.ts";

const data = await Deno.readTextFile("year2016/day03_data.txt");

const example2 = `101 301 501
102 302 502
103 303 503
201 401 601
202 402 602
203 403 603`;

Deno.test("day03", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1("5 10 25"), 0);
    });

    await t.step("example2", () => {
      assertEquals(part1(example2), 3);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 869);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example1", () => {
      assertEquals(part2("5 10 25"), 0);
    });

    await t.step("example2", () => {
      assertEquals(part2(example2), 6);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 1544);
    });
  });
});
