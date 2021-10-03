/** Transforms a generator to an array. */
export function toArray<T>(this: Generator<T>): T[] {
  return [...this];
}
