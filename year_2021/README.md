# year_2021

![](https://img.shields.io/badge/day%20📅-14-blue)
![](https://img.shields.io/badge/stars%20⭐-26-yellow)
![](https://img.shields.io/badge/days%20completed-13-green)

Advent of Code solutions for year 2021. Currently in progress.

## Best Solution

[Day 10](https://github.com/N8Brooks/deno_aoc/blob/main/year_2021/day_10.ts). If
you are okay with breaking loops then the solution for this can be incredibly
streamlined.

## Hardest Problem

[Day 8](https://github.com/N8Brooks/deno_aoc/blob/main/year_2021/day_08.ts).
Deciphering what
[seven-segment display](https://en.wikipedia.org/wiki/Seven-segment_display) was
used turned out to be incredibly difficult. Some people used permutations of
possible displays, but that tends to be slow.
[Others](https://www.reddit.com/r/adventofcode/comments/rbj87a/2021_day_8_solutions/?utm_source=share&utm_medium=web2x&context=3)
used solutions that determined the identity of the digit by using givens from
the input. This approach could theoretically fail if a 1, 4, 7, or 8 digit are
not given for a line in the input. I preferred it because of its efficiency.
