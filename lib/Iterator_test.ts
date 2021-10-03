import "./main.ts";
import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { Iterator } from "./Iterator.ts";
import { range } from "./range.ts";

Deno.test("n=0", () => {
  const actual = [...Iterator.from(range(0))];
  assertEquals(actual, []);
});

Deno.test("string", () => {
  const actual = [...Iterator.from("abc")];
  const expected = ["a", "b", "c"];
  assertEquals(actual, expected);
});

Deno.test("range", () => {
  const actual = [...Iterator.from(range(5))];
  const expected = [...range(5)];
  assertEquals(actual, expected);
});
