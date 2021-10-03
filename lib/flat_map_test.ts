import "./main.ts";
import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { Iterator } from "./Iterator.ts";

Deno.test("n = 0", () => {
  const actual = [...[].flatMap((value) => value)];
  assertEquals(actual, []);
});

Deno.test("n = 0 (nested)", () => {
  const iterable = [[], [], []];
  const actual = [...Iterator.from(iterable).flatMap((value) => value)];
  assertEquals(actual, []);
});

Deno.test("n = 1", () => {
  const iterable = [[1]];
  const actual = [...Iterator.from(iterable).flatMap((value) => value)];
  const expected = [1];
  assertEquals(actual, expected);
});

Deno.test("n = 5", () => {
  const iterable = ["one", "two three", "four"];
  const actual = [
    ...Iterator.from(iterable).flatMap((value) => value.split(" ")),
  ];
  const expected = iterable.flatMap((value) => value.split(" "));
  assertEquals(actual, expected);
});

Deno.test("n = 5 (index)", () => {
  const iterable = ["one", "two three", "four"];
  const actual = [
    ...Iterator.from(iterable).flatMap((_, index) => [2 * index]),
  ];
  const expected = [0, 2, 4];
  assertEquals(actual, expected);
});
