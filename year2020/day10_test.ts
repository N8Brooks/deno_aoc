import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day10.ts";

const example1 = `16
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

const example2 = `28
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

const data = await Deno.readTextFile("year2020/day10_data.txt");

describe("day10", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1(example1)).to.equal(35);
    });

    it("example2", () => {
      expect(part1(example2)).to.equal(220);
    });

    it("data", () => {
      expect(part1(data)).to.equal(2760);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2(example1)).to.equal(8);
    });

    it("example2", () => {
      expect(part2(example2)).to.equal(19208);
    });

    it("data", () => {
      expect(part2(data)).to.equal(13816758796288);
    });
  });
});
