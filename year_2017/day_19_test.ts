import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_19.ts";

const input = await Deno.readTextFile("year_2017/testdata/day_19.txt");

const EXAMPLE = `     |          
     |  +--+    
     A  |  C    
 F---|----E|--+ 
     |  |  |  D 
     +B-+  +--+ 
                `;

describe("day 19", () => {
  describe("part 1", () => {
    it("example", () => {
      expect(part1(EXAMPLE)).to.equal("ABCDEF");
    });

    it("input", () => {
      expect(part1(input)).to.equal("PBAZYFMHT");
    });
  });

  describe("part 2", () => {
    it("example", () => {
      expect(part2(EXAMPLE)).to.equal(38);
    });

    it("input", () => {
      expect(part2(input)).to.equal(16072);
    });
  });
});
