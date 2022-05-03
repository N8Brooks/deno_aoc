import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_22.ts";

const EXAMPLE = `root@ebhq-gridcenter# df -h
Filesystem            Size  Used  Avail  Use%
/dev/grid/node-x0-y0   10T    8T     2T   80%
/dev/grid/node-x0-y1   11T    6T     5T   54%
/dev/grid/node-x0-y2   32T   28T     4T   87%
/dev/grid/node-x1-y0    9T    7T     2T   77%
/dev/grid/node-x1-y1    8T    0T     8T    0%
/dev/grid/node-x1-y2   11T    7T     4T   63%
/dev/grid/node-x2-y0   10T    6T     4T   60%
/dev/grid/node-x2-y1    9T    8T     1T   88%
/dev/grid/node-x2-y2    9T    6T     3T   66%`;

const input = await Deno.readTextFile("year_2016/testdata/day_22.txt");

describe("day 22", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal(7);
    });

    it("input", () => {
      expect(part1(input)).to.equal(892);
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(7);
    });

    it("input", () => {
      expect(part2(input)).to.equal(227);
    });
  });
});
