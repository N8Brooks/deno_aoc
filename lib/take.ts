/** Iterator that produces, at most, the given number of elements produced by the underlying iterator. */
export function* take<T>(this: Generator<T>, limit: number): Generator<T> {
  if (limit < 0 || !Number.isInteger(limit)) {
    throw new RangeError("limit must be a non-negative integer");
  }
  let index = 0;
  for (const value of this) {
    if (index < limit) {
      yield value;
    } else {
      return;
    }
    index += 1;
  }
}
