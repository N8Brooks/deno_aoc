# deno_aoc

[![ci](https://github.com/N8Brooks/aoc_ts/actions/workflows/ci.yml/badge.svg)](https://github.com/N8Brooks/aoc_ts/actions/workflows/ci.yml)

Advent of Code solutions written in TypeScript for Deno.

## Testing

Testing uses a
[polyfill for mocha](https://gist.github.com/lucacasonato/54c03bb267074aaa9b32415dbfb25522)
using the unstable iterative steps API. Testing the mock bitcoin mining problems
takes a while so it's best to ignore them.

```bash
deno test --allow-read --unstable --ignore="year_2015/day_04_test.ts,year_2016/day_05_test.ts"
```

## Styling

- This project follows the
  [Deno Style Guide](https://deno.land/manual/contributing/style_guide).
- Dependencies are managed in the `deps.ts` and `test_deps.ts` file as
  recommended by the
  [Managing Dependencies](https://deno.land/manual@v1.16.4/examples/manage_dependencies)
  section of the Deno Manual.
- Project structure follows a year20XX/dayXX.ts pattern where each dayXX.ts file
  has a `part1` and a `part2` named export function.
- Linting and formatting are done with no arguments using Deno.

```bash
deno lint
deno fmt
```
