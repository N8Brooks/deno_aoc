import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day14.ts";

const data = await Deno.readTextFile("year2015/day14_data.txt");

const example =
  `Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.`;

Deno.test("part1(example)", () => {
  assertEquals(part1(example, 1000), 1120);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data, 2503), 2696);
});

Deno.test("part2(example)", () => {
  assertEquals(part2(example, 1000), 689);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data, 2503), 1084);
});
