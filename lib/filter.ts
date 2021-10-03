import { CallbackFn } from "./function_types.ts";

/** Allows users to skip values from an iterator which do not pass a filter function. */
export function* filter<T, U>(
  this: Generator<T>,
  filtererFn: CallbackFn<T, U>,
): Generator<T> {
  let index = 0;
  for (const value of this) {
    if (filtererFn(value, index)) {
      yield value;
    }
    index += 1;
  }
}
