import "./main.ts";
import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { range } from "./range.ts";
import { Iterator } from "./Iterator.ts";

function add(a: number, b: number): number {
  return a + b;
}

Deno.test("n=0", () => {
  assertThrows(
    () => range(0).reduce(add),
    TypeError,
    "Reduce of empty generator with no initial value",
  );
});

Deno.test("n=1", () => {
  const actual = range(1).reduce(add);
  const expected = 0;
  assertEquals(actual, expected);
});

Deno.test("n = 5", () => {
  const actual = range(5).reduce(add);
  const expected = 10;
  assertEquals(actual, expected);
});

Deno.test("n=0 with initial value of 10", () => {
  const actual = range(0).reduce(add, 10);
  const expected = 10;
  assertEquals(actual, expected);
});

Deno.test("n=2 with initial value of -1", () => {
  const actual = range(2).reduce(add, -1);
  const expected = 0;
  assertEquals(actual, expected);
});

Deno.test("n = 5 with initial value of Infinity", () => {
  const actual = range(5).reduce(add, Infinity);
  const expected = Infinity;
  assertEquals(actual, expected);
});

Deno.test("U is different than t", () => {
  const input = [[1, 2], [3, 4], [5, 6, 7], [], [8]];
  const reducerFn = (a: number, b: number[]): number => a + b.length;
  const actual = Iterator.from(input).reduce(reducerFn, 2);
  const expected = 10;
  assertEquals(actual, expected);
});

Deno.test("reduce on index", () => {
  const input = [[1, 2], [3, 4], [5, 6, 7], [], [8]];
  const reducerFn = (a: number, _: number[], i: number): number => a + i;
  const actual = Iterator.from(input).reduce(reducerFn, 0);
  const expected = 10;
  assertEquals(actual, expected);
});
