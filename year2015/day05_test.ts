import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day05.ts";

const part1NiceExamples = [
  "ugknbfddgicrmopn",
  "aaa",
];

for (const nice of part1NiceExamples) {
  Deno.test(`part1(${nice})`, () => {
    assertEquals(part1(nice), 1);
  });
}

const part1NaughtyExamples = [
  "jchzalrnumimnmhp",
  "haegwjzuvuyypxyu",
  "dvszwmarrgswjxmb",
];

for (const naughty of part1NaughtyExamples) {
  Deno.test(`part1(${naughty})`, () => {
    assertEquals(part1(naughty), 0);
  });
}

const part2NiceExamples = [
  "qjhvhtzxzqqjkmpb",
  "xxyxx",
];

for (const nice of part2NiceExamples) {
  Deno.test(`part2(${nice})`, () => {
    assertEquals(part2(nice), 1);
  });
}

const part2NaughtyExamples = [
  "uurcxstgmygtbstg",
  "ieodomkazucvgmuy",
];

for (const naughty of part2NaughtyExamples) {
  Deno.test(`part2(${naughty})`, () => {
    assertEquals(part2(naughty), 0);
  });
}
