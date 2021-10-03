import { CallbackFn } from "./function_types.ts";

/** For use of side effects with a generator, you can use the `.forEach` method, which takes each element as an argument for the function. */
export function forEach<T, U>(
  this: Generator<T>,
  callbackFn: CallbackFn<T, U>,
) {
  let index = 0;
  for (const value of this) {
    callbackFn(value, index);
    index += 1;
  }
}
