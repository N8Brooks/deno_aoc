# deno_aoc

[![code_cov](https://codecov.io/gh/N8Brooks/deno_aoc/branch/main/graph/badge.svg?token=7S2WQSKUVD)](https://codecov.io/gh/N8Brooks/deno_aoc)
[![deno_aoc](https://github.com/N8Brooks/deno_aoc/actions/workflows/deno_aoc.yaml/badge.svg)](https://github.com/N8Brooks/deno_aoc/actions/workflows/deno_aoc.yaml)

Advent of Code solutions written in TypeScript for Deno.

## Testing

- Testing uses a
  [BDD](https://deno.land/std@0.147.0/testing#behavior-driven-development) from
  the Deno standard library.
- Testing the MD5 hashing problems takes a while so it's best to ignore them.
- Tests are run in the github actions.

```bash
deno test --allow-read --ignore="year_2015/day_04_test.ts,year_2016/day_05_test.ts,year_2016/day_14_test.ts"
```

## Benchmarking

- Benchmarking is done with the standard `Deno.bench()` function.

```bash
deno bench --allow-read --unstable
```

## Linting

- Linting is done with no arguments using Deno.
- Linting is checked in the github actions.

```bash
deno lint
```

## Formatting

- Formatting is done using no arguments with Deno.
- It is also checked in the github actions.
- Running this on windows may cause problems relating to the preferred newline
  character.

```bash
deno fmt
```

## Styling

- This project follows the
  [Deno Style Guide](https://deno.land/manual/contributing/style_guide).
- Dependencies are managed in the `deps.ts` and `test_deps.ts` file as
  recommended by the
  [Managing Dependencies](https://deno.land/manual@v1.16.4/examples/manage_dependencies)
  section of the Deno Manual.
- Project structure follows a year_20XX/day_XX.ts pattern where each day_XX.ts
  file has a `part1` and a `part2` named export function.
