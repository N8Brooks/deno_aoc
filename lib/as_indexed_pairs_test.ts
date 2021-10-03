import "./main.ts";
import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { range } from "./range.ts";

Deno.test("n = 0", () => {
  const actual = [...range(0).asIndexedPairs()];
  assertEquals(actual, []);
});

Deno.test("n = 1", () => {
  const actual = [...range(1).asIndexedPairs()];
  const expected = [[0, 0]];
  assertEquals(actual, expected);
});

Deno.test("n = 5", () => {
  const actual = [...range(5).asIndexedPairs()];
  const expected = [...range(5).map((_, index) => [index, index])];
  assertEquals(actual, expected);
});
