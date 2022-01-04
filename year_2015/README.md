# year_2015

[![year_2015](https://github.com/N8Brooks/deno_aoc/actions/workflows/year_2015.yaml/badge.svg)](https://github.com/N8Brooks/deno_aoc/actions/workflows/year_2015.yaml)
![](https://img.shields.io/badge/day%20📅-25-blue)
![](https://img.shields.io/badge/stars%20⭐-50-yellow)
![](https://img.shields.io/badge/days%20completed-25-green)

Advent of Code solutions for year 2015.

## Best Solution

[Day 21](https://github.com/N8Brooks/deno_aoc/blob/main/year_2015/day_21.ts).
This involves simulating a battle between a player and a boss. The
straightforward nature of the battle allows for a clean solution using
combinatorics.

## Hardest Problem

[Day 22](https://github.com/N8Brooks/deno_aoc/blob/main/year_2015/day_22.ts).
This problem involves simulating a battle between a _**magic**_ player and a
boss. Ironically, it's very similar to Day 21, but the additional complexity of
giving the player the choice of how to attack each turn makes it more complex.

## Slowest Problem

[Day 4](https://github.com/N8Brooks/deno_aoc/blob/main/year_2015/day_04.ts).
This is a mock bitcoin implementation where you have to find a nonce which gives
a hash with the given criteria. Unfortunately, the Deno std doesn't have great
support for the MD5 hash right now. The hash module is now depreciated in favor
of crypto and web crypto. Given the crypto module is async perhaps a limited
concurrent queue could speed it up. Alternatively web workers as this is
[embarrassingly parallel](https://en.wikipedia.org/wiki/Embarrassingly_parallel).
