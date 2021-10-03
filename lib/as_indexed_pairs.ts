/** Pairs each value of the generator with a counter, starting at 0 and increasing by 1 with every element produced. */
export function* asIndexedPairs<T>(this: Generator<T>): Generator<[number, T]> {
  let index = 0;
  for (const value of this) {
    yield [index, value];
    index += 1;
  }
}
