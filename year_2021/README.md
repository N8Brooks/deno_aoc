# year_2021

![](https://img.shields.io/badge/day%20📅-18-blue)
![](https://img.shields.io/badge/stars%20⭐-34-yellow)
![](https://img.shields.io/badge/days%20completed-17-green)

Advent of Code solutions for year 2021. Currently in progress.

## Best Solution

[Day 10](https://github.com/N8Brooks/deno_aoc/blob/main/year_2021/day_10.ts). If
you are okay with breaking loops then the solution for this can be incredibly
streamlined.

## Solution with Room for Improvement

[Day 16](https://github.com/N8Brooks/deno_aoc/blob/main/year_2021/day_16.ts).
This could probably be implemented with the
[shunting-yard algorithm](https://en.wikipedia.org/wiki/Shunting-yard_algorithm).
However, because it requires some nested expressions to be defined by length and
some by count it would introduce additional complexities as opposed to the
current solution.

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

## Slowest Problem

[Day 15](https://github.com/N8Brooks/deno_aoc/blob/main/year_2021/day_15.ts).
Shortest path finding algorithm. Most people went with
[Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) or
the [A* search](https://en.wikipedia.org/wiki/A*_search_algorithm) algorithm.
With this solution implementing the latter it only take 300-400ms to find the
solution for all examples and program inputs. For the slowest solution in a
given year that is not too bad.
