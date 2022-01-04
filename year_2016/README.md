# year_2016

[![year_2016](https://github.com/N8Brooks/deno_aoc/actions/workflows/year_2016.yaml/badge.svg)](https://github.com/N8Brooks/deno_aoc/actions/workflows/year_2016.yaml)
![](https://img.shields.io/badge/day%20📅-25-blue)
![](https://img.shields.io/badge/stars%20⭐-50-yellow)
![](https://img.shields.io/badge/days%20completed-25-green)

Advent of Code solutions for year 2016.

## Path Finding

[Day 11](https://github.com/N8Brooks/deno_aoc/blob/main/year_2016/day_11.ts).
Involved finding the shortest path between floors where you can carry up to two
items at a time. Certain other criteria apply. Since this is an unweighted graph
a breadth first search is sufficient for the search space.

## Slowest Problem

[Day 14](https://github.com/N8Brooks/deno_aoc/blob/main/year_2016/day_14.ts).
This involves finding hashes that match certain criteria. With Part 2 especially
this take a long while.

## Another Slow Problem

[Day 5](https://github.com/N8Brooks/deno_aoc/blob/main/year_2016/day_05.ts).
This is a mock bitcoin implementation where you have to find a hash with certain
criteria. Similar to year 2015 the slowest problem involved MD5 hashes.

## Problem with Room for Improvement

[Day 16](https://github.com/N8Brooks/deno_aoc/blob/main/year_2016/day_16.ts).
There are certainly more efficient ways to calculate the end result, but I'm
okay with this implementation at the moment.
