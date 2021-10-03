import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { range } from "./range.ts";

for (const n of [NaN, -Infinity, 0.5, 1 / 7, Math.PI, Infinity]) {
  Deno.test(n.toString(), () => {
    assertThrows(
      () => [...range(n)],
      RangeError,
      "stop must be an integer",
    );
  });
}

for (const n of [-Number.MAX_SAFE_INTEGER, -10, -1, 0]) {
  Deno.test(n.toString(), () => {
    assertEquals([...range(n)], []);
  });
}

for (const n of [1, 2, 5, 10, 100]) {
  Deno.test(n.toString(), () => {
    const actual = [...range(n)];
    const expected = Array(n).fill(null).map((_, i) => i);
    assertEquals(actual, expected);
  });
}
