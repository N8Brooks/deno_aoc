/** Callback function type used for some iterator helpers. */
export interface CallbackFn<T, U> {
  (value: T, index: number): U;
}

/** Reducer function used for reduce. */
export interface ReducerFn<T, U> {
  (previousValue: U, currentValue: T, index: number): U;
}
