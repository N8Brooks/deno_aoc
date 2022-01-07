# year_2017

[![year_2017](https://github.com/N8Brooks/deno_aoc/actions/workflows/year_2017.yaml/badge.svg)](https://github.com/N8Brooks/deno_aoc/actions/workflows/year_2017.yaml)
![](https://img.shields.io/badge/day%20📅-25-blue)
![](https://img.shields.io/badge/stars%20⭐-50-yellow)
![](https://img.shields.io/badge/days%20completed-25-green)

Advent of Code solutions for year 2017.

## Union Find

[Day 12](https://github.com/N8Brooks/deno_aoc/blob/main/year_2017/day_12.ts).
Makes use of a cut down
[disjoint set data structure](https://en.wikipedia.org/wiki/Disjoint-set_data_structure).
Pretty cool. Before returning the groups it amortizes each element to be its
parent group.

## Solution with Room for Improvement

[Day 13](https://github.com/N8Brooks/deno_aoc/blob/main/year_2017/day_13.ts). I
believe there could be a more efficient way to find this number. Perhaps it
could iterate based on previous divisors. It could read between the lines based
on what the remainder must be for it to not be evenly divisible by certain
divisors.

## Flood Fill

[Day 14](https://github.com/N8Brooks/deno_aoc/blob/main/year_2017/day_14.ts).
This is more or less a traditional flood fill implemented using a union find.
Initially there was some trouble getting the 1-dimensional matrix working with x
and y coordinates because of how `x - 1` would be the same as `y - 1` at the end
of the row.

## Slowest Problem

[Day 15](https://github.com/N8Brooks/deno_aoc/blob/main/year_2017/day_15.ts).
This problem is similar to
[pseudorandom number generation](https://en.wikipedia.org/wiki/Pseudorandom_number_generator).
It's a problem involving a lot of computation that finds random numbers that
match with regard to their last 16 bits.
