import "./function_types.ts";
import { asIndexedPairs } from "./as_indexed_pairs.ts";
import { drop } from "./drop.ts";
import { every } from "./every.ts";
import { filter } from "./filter.ts";
import { find } from "./find.ts";
import { flatMap } from "./flat_map.ts";
import { forEach } from "./for_each.ts";
import { map } from "./map.ts";
import { take } from "./take.ts";
import { toArray } from "./to_array.ts";
import { range } from "./range.ts";
import { reduce } from "./reduce.ts";
import { some } from "./some.ts";

/** main Generator typing */
declare global {
  interface Generator {
    map: typeof map;
    filter: typeof filter;
    take: typeof take;
    drop: typeof drop;
    asIndexedPairs: typeof asIndexedPairs;
    flatMap: typeof flatMap;
    reduce: typeof reduce;
    toArray: typeof toArray;
    forEach: typeof forEach;
    some: typeof some;
    every: typeof every;
    find: typeof find;
  }
}

/** Array of helpers added to `Generator`. */
export const iteratorHelpers = [
  map,
  filter,
  take,
  drop,
  asIndexedPairs,
  flatMap,
  reduce,
  toArray,
  forEach,
  some,
  every,
  find,
];

/** Generator function prototype. */
export const GeneratorFunction = Object.getPrototypeOf(range).prototype;

/** Applies iterator helper monkey-patch. */
export function main(): void {
  const propertyDescriptors = iteratorHelpers.map(helperToPropertyDescriptor);
  const propertyDescriptorMap = Object.fromEntries(propertyDescriptors);
  Object.defineProperties(GeneratorFunction, propertyDescriptorMap);
}

/** Returns an `Array` of name and object of property descriptors. */
export function helperToPropertyDescriptor(
  helper: typeof iteratorHelpers[number],
): [string, PropertyDescriptor] {
  return [helper.name, {
    writable: true,
    enumerable: false,
    configurable: true,
    value: helper,
  }];
}

main(); // apply monkey-patch
