import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day24.ts";

const data = await Deno.readTextFile("year2015/day24_data.txt");

const example = "1 2 3 4 5 7 8 9 10 11";

Deno.test("part1(example)", () => {
  assertEquals(part1(example), 99);
});

Deno.test("part1(data)", () => {
  assertEquals(part1(data), 10439961859);
});

Deno.test("part1(invalid)", () => {
  assertThrows(
    () => part1("a"),
    Error,
    "no combination was found with targeted value",
  );
});

Deno.test("part2(example)", () => {
  assertEquals(part2(example), 44);
});

Deno.test("part2(data)", () => {
  assertEquals(part2(data), 72050269);
});

Deno.test("part2(invalid)", () => {
  assertThrows(
    () => part1("a"),
    Error,
    "no combination was found with targeted value",
  );
});
