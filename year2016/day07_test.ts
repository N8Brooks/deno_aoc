import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day07.ts";

const example1 = `abba[mnop]qrst
abcd[bddb]xyyx
aaaa[qwer]tyui
ioxxoj[asdfgh]zxcvbn`;

const example2 = `aba[bab]xyz
xyx[xyx]xyx
aaa[kek]eke
zazbz[bzb]cdb`;

const data = await Deno.readTextFile("year2016/day07_data.txt");

Deno.test("day07", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1(example1), 2);
    });

    await t.step("example2", () => {
      assertEquals(part1(example2), 0);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 115);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example1", () => {
      assertEquals(part2(example1), 0);
    });

    await t.step("example2", () => {
      assertEquals(part2(example2), 3);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 231);
    });
  });
});
