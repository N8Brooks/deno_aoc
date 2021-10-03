import "./main.ts";
import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { range } from "./range.ts";

Deno.test("n=0", () => {
  const actual = range(0).every((value) => value);
  assertEquals(actual, true);
});

Deno.test("truthy", () => {
  const actual = range(5).every((value) => value >= 0);
  assertEquals(actual, true);
});

Deno.test("falsy", () => {
  const actual = range(5).every((value) => value < 4);
  assertEquals(actual, false);
});
