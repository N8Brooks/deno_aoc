import "./main.ts";
import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { range } from "./range.ts";

Deno.test("n = 0", () => {
  let called = false;
  const callbackFn = () => {
    called = true;
  };
  range(0).forEach(callbackFn);
  assertEquals(called, false);
});

Deno.test("n = 5", () => {
  let total = 0;
  const callbackFn = (value: number) => total += value;
  range(5).forEach(callbackFn);
  assertEquals(total, 10);
});

Deno.test("n = 6 with index", () => {
  let total = 0;
  const callbackFn = (_: number, index: number) => total += index;
  range(6).forEach(callbackFn);
  assertEquals(total, 15);
});
