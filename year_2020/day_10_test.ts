import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_10.ts";

const EXAMPLE_1 = `16
10
15
5
1
11
7
19
6
12
4`;

const EXAMPLE_2 = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

const input = await Deno.readTextFile("year_2020/testdata/day_10.txt");

describe("day 10", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1(EXAMPLE_1)).to.equal(35);
    });

    it("example 2", () => {
      expect(part1(EXAMPLE_2)).to.equal(220);
    });

    it("input", () => {
      expect(part1(input)).to.equal(2760);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2(EXAMPLE_1)).to.equal(8);
    });

    it("example 2", () => {
      expect(part2(EXAMPLE_2)).to.equal(19208);
    });

    it("input", () => {
      expect(part2(input)).to.equal(13816758796288);
    });
  });
});
