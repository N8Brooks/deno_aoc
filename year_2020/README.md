# year_2020

[![year_2020](https://github.com/N8Brooks/deno_aoc/actions/workflows/year_2020.yaml/badge.svg)](https://github.com/N8Brooks/deno_aoc/actions/workflows/year_2020.yaml)
![](https://img.shields.io/badge/day%20📅-25-blue)
![](https://img.shields.io/badge/stars%20⭐-50-yellow)
![](https://img.shields.io/badge/days%20completed-25-green)

Advent of Code solutions for year 2020.

## Best Solution

[Day 18](https://github.com/N8Brooks/deno_aoc/blob/main/year_2020/day_18.ts).
Most solutions for Day 18 involved language hacks that modified how expressions
are evaluated or regular expressions that evaluated the expression in parts. The
solutions here use cut down version of the
[shunting-yard algorithm](https://en.wikipedia.org/wiki/Shunting-yard_algorithm)
that allows for efficient evaluation using a stack.

## Hardest Problem

[Day 20](https://github.com/N8Brooks/deno_aoc/blob/main/year_2020/day_20.ts).
Involves rotating tiles based on their sides until they match. This solution
could probably be improved to be more readable and less complex.

## Second Hardest Problem

[Day 19](https://github.com/N8Brooks/deno_aoc/blob/main/year_2020/day_19.ts).
Most solutions involve an amalgamation of regular expressions. This solution is
inspired by
[several other solutions](https://www.reddit.com/r/adventofcode/comments/kg1mro/2020_day_19_solutions/?utm_source=share&utm_medium=web2x&context=3)
which uses recursion to validate a message with the given grammar. The problem
contains a thinly veiled threat that a
[formal grammar](https://en.wikipedia.org/wiki/Formal_grammar) would cause the
solution to be significantly more difficult.

## Slowest Problem

[Day 15](https://github.com/N8Brooks/deno_aoc/blob/main/year_2020/day_15.ts).
Involves a linear time algorithm run with very large inputs. As far as I know
this is the fastest possible implementation. Even using `Uint32Array`s did not
seem to improve performance.
