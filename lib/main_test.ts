import {
  assertEquals,
  assertStrictEquals,
} from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { GeneratorFunction, iteratorHelpers } from "./main.ts";

for (const helper of iteratorHelpers) {
  Deno.test(helper.name, () => {
    const actual = Object.getOwnPropertyDescriptor(
      GeneratorFunction,
      helper.name,
    );
    const expected = {
      writable: true,
      enumerable: false,
      configurable: true,
      value: helper,
    };
    assertEquals(actual, expected);
  });
}

Deno.test("generator", () => {
  assertStrictEquals(GeneratorFunction.toString(), "[object Generator]");
});
