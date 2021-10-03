/** Skips the given number of elements produced by the underlying iterator before itself producing any remaining elements. */
export function* drop<T>(this: Generator<T>, limit: number): Generator<T> {
  if (limit < 0 || !Number.isInteger(limit)) {
    throw new RangeError("limit must be a non-negative integer");
  }
  let index = 0;
  for (const value of this) {
    if (index < limit) {
      index += 1;
    } else {
      yield value;
    }
  }
}
