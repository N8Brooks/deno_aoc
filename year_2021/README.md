# year_2021

[![year_2021](https://github.com/N8Brooks/deno_aoc/actions/workflows/year_2021.yaml/badge.svg)](https://github.com/N8Brooks/deno_aoc/actions/workflows/year_2021.yaml)
![](https://img.shields.io/badge/day%20📅-25-blue)
![](https://img.shields.io/badge/stars%20⭐-50-yellow)
![](https://img.shields.io/badge/days%20completed-25-green)

Advent of Code solutions for year 2021.

## Best Solution

[Day 10](https://github.com/N8Brooks/deno_aoc/blob/main/year_2021/day_10.ts). If
you are okay with breaking loops then the solution for this can be incredibly
streamlined.

## Another Good Solution

[Day 18](https://github.com/N8Brooks/deno_aoc/blob/main/year_2021/day_18.ts).
Flattening the list and keeping track of left and right depth separately
enormously simplifies the problem. Finding the indices that an exploded pair
adds to can be found by adding or subtracting one from the exploded pair. The
final magnitude can be calculated as `3 ** left * 2 ** right * value`.

## Solution with Room for Improvement

[Day 16](https://github.com/N8Brooks/deno_aoc/blob/main/year_2021/day_16.ts).
This could probably be implemented with the
[shunting-yard algorithm](https://en.wikipedia.org/wiki/Shunting-yard_algorithm).
However, because it requires some nested expressions to be defined by length and
some by count it would introduce additional complexities as opposed to the
current solution.

## Hardest Problem

[Day 19](https://github.com/N8Brooks/deno_aoc/blob/main/year_2021/day_19.ts).
Involves rotating collections of points in 3 dimensions so that they line up.
Originally this traversed 48 rotations for each collection of points, although
now it only traverses the 24 unique rotations. A popular optimization involves
adding rotation agnostic fingerprints to collections of points to minimize the
amount of times you need to test two collections that don't end up lining up.
Between these two things it is messy, but a lot faster.

## Slowest Problem

[Day 23](https://github.com/N8Brooks/deno_aoc/blob/main/year_2021/day_23.ts).
Most people went with
[Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) or
the [A* search](https://en.wikipedia.org/wiki/A*_search_algorithm) algorithm.
With this solution implementing the latter it takes ~1000ms to find the solution
for part 2 with the problem input. This implementation also uses buckets instead
of a min-heap like Dial's algorithm.
