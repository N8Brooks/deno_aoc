# year_2017

![](https://img.shields.io/badge/day%20📅-14-blue)
![](https://img.shields.io/badge/stars%20⭐-26-yellow)
![](https://img.shields.io/badge/days%20completed-13-red)

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
