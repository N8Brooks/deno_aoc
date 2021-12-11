# year_2015

## Best Solution

[Day 21](https://github.com/N8Brooks/deno_aoc/blob/main/year_2015/day_21.ts).
This involves simulating a battle between a player and a boss. Ironically it's
very similar to Day 22, however, it's far easier to simulate which allows for a
clean solution using combinatorics..

## Hardest Problem

Day 22. These problems involve simulating a battle between a **magic** player
and a boss. I'm still working on a good solution for it.

## Slowest Problem

[Day 4](https://github.com/N8Brooks/deno_aoc/blob/main/year_2015/day_04.ts). The
Deno std doesn't have great support for the MD5 hash right now. The hash module
is now depreciated in favor of crypto and web crypto. Given the crypto module is
async perhaps a limited concurrent queue could speed it up. Alternatively web
workers as this is
[embarrassingly parallel](https://en.wikipedia.org/wiki/Embarrassingly_parallel).
