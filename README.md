# aoc_ts

[![ci](https://github.com/N8Brooks/aoc_ts/actions/workflows/ci.yml/badge.svg)](https://github.com/N8Brooks/aoc_ts/actions/workflows/ci.yml)

Advent of code solutions written in TypeScript for Deno. Most years are only
half complete. This is not a compilation of all solutions.

## Testing

Testing uses a
[polyfill for mocha](https://gist.github.com/lucacasonato/54c03bb267074aaa9b32415dbfb25522)
using the unstable iterative steps API. Testing the mock bitcoin mining problems
takes a while so it's best to ignore them. If you want to test
`year2015/day04.ts` then use `--allow-net` because it uses Web Workers.

```bash
deno test --allow-read --unstable --ignore="year2015/day04_test.ts,year2016/day05_test.ts"
```
