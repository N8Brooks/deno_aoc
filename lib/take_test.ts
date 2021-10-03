import "./main.ts";
import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { range } from "./range.ts";

Deno.test("take(-1)", () => {
  assertThrows(
    () => [...range(1).take(-5)],
    RangeError,
    "limit must be a non-negative integer",
  );
});

Deno.test("take(NaN)", () => {
  assertThrows(
    () => [...range(5).take(NaN)],
    RangeError,
    "limit must be a non-negative integer",
  );
});

Deno.test("take(0)", () => {
  const actual = [...range(5).take(0)];
  assertEquals(actual, []);
});

Deno.test("take(1)", () => {
  const actual = [...range(5).take(1)];
  const expected = [0];
  assertEquals(actual, expected);
});

Deno.test("take(5)", () => {
  const actual = [...range(5).take(5)];
  const expected = [0, 1, 2, 3, 4];
  assertEquals(actual, expected);
});

Deno.test("take(10)", () => {
  const actual = [...range(10).take(5)];
  const expected = [0, 1, 2, 3, 4];
  assertEquals(actual, expected);
});
