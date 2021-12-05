import { expect } from "../test_deps.ts";
import { part1, part2 } from "./day09.ts";

const example1 = `7
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

const example2 = `35
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

const input = await Deno.readTextFile("year2020/testdata/day09.txt");

describe("day09", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1(example1, 25), 100);
    });

    it("example2", () => {
      expect(part1(example2, 5), 127);
    });

    it("input", () => {
      expect(part1(input, 25), 22477624);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2(example1, 25), 61);
    });

    it("example2", () => {
      expect(part2(example2, 5), 62);
    });

    it("input", () => {
      expect(part2(input, 25), 2980044);
    });
  });
});
