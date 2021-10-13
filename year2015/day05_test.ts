import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day05.ts";

let exampleIndex = 1;

const part1NiceExamples = [
  "ugknbfddgicrmopn",
  "aaa",
];

const part1NaughtyExamples = [
  "jchzalrnumimnmhp",
  "haegwjzuvuyypxyu",
  "dvszwmarrgswjxmb",
];

const part2NiceExamples = [
  "qjhvhtzxzqqjkmpb",
  "xxyxx",
];

const part2NaughtyExamples = [
  "uurcxstgmygtbstg",
  "ieodomkazucvgmuy",
];

const data = await Deno.readTextFile("year2015/day05_data.txt");

Deno.test("day05", async (t) => {
  await t.step("part1", async (t) => {
    for (const nice of part1NiceExamples) {
      await t.step(`part1(example${exampleIndex++})`, () => {
        assertEquals(part1(nice), 1);
      });
    }

    for (const naughty of part1NaughtyExamples) {
      await t.step(`part1(example${exampleIndex++})`, () => {
        assertEquals(part1(naughty), 0);
      });
    }

    await t.step("part1(data)", () => {
      assertEquals(part1(data), 238);
    });
  });

  await t.step("part2", async (t) => {
    for (const nice of part2NiceExamples) {
      await t.step(`part1(example${exampleIndex++})`, () => {
        assertEquals(part2(nice), 1);
      });
    }

    for (const naughty of part2NaughtyExamples) {
      await t.step(`part1(example${exampleIndex++})`, () => {
        assertEquals(part2(naughty), 0);
      });
    }

    await t.step("part2(data)", () => {
      assertEquals(part2(data), 69);
    });
  });
});
