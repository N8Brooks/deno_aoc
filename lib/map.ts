import { CallbackFn } from "./function_types.ts";

/** Allows users to apply a function to every element returned from an iterator. */
export function* map<T, U>(
  this: Generator<T>,
  mapperFn: CallbackFn<T, U>,
): Generator<U> {
  let index = 0;
  for (const value of this) {
    yield mapperFn(value, index);
    index += 1;
  }
}
