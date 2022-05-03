import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_12.ts";

const EXAMPLE_1 = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;

const EXAMPLE_2 = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`;

const EXAMPLE_3 = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`;

const input = await Deno.readTextFile("year_2021/testdata/day_12.txt");

describe("day 12", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1(EXAMPLE_1)).to.equal(10);
    });

    it("example 2", () => {
      expect(part1(EXAMPLE_2)).to.equal(19);
    });

    it("example 3", () => {
      expect(part1(EXAMPLE_3)).to.equal(226);
    });

    it("input", () => {
      expect(part1(input)).to.equal(3495);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2(EXAMPLE_1)).to.equal(36);
    });

    it("example 2", () => {
      expect(part2(EXAMPLE_2)).to.equal(103);
    });

    it("example 3", () => {
      expect(part2(EXAMPLE_3)).to.equal(3509);
    });

    it("input", () => {
      expect(part2(input)).to.equal(94849);
    });
  });
});
