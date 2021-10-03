export class Iterator {
  /** Wraps an iterable with a generator. */
  static *from<T>(iterable: Iterable<T>): Generator<T> {
    for (const value of iterable) {
      yield value;
    }
  }
}
