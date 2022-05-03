import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_09.ts";

const EXAMPLE_1 = `7
2
24
11
5
16
22
6
25
8
17
15
20
14
4
21
23
19
18
9
3
10
1
13
12
26
49
100
50`;

const EXAMPLE_2 = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;

const input = await Deno.readTextFile("year_2020/testdata/day_09.txt");

describe("day 9", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1(EXAMPLE_1, 25)).to.equal(100);
    });

    it("example 2", () => {
      expect(part1(EXAMPLE_2, 5)).to.equal(127);
    });

    it("input", () => {
      expect(part1(input, 25)).to.equal(22477624);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2(EXAMPLE_1, 25)).to.equal(61);
    });

    it("example 2", () => {
      expect(part2(EXAMPLE_2, 5)).to.equal(62);
    });

    it("input", () => {
      expect(part2(input, 25)).to.equal(2980044);
    });
  });
});
