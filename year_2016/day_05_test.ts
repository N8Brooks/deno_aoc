import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_05.ts";

const input = await Deno.readTextFile("year_2016/testdata/day_05.txt");

describe("day 5", () => {
  describe("part 1", () => {
    it("example", async () => {
      expect(await part1("abc")).to.equal("18f47a30");
    });

    it("input", async () => {
      expect(await part1(input)).to.equal("c6697b55");
    });
  });

  describe("part 2", () => {
    it("example", async () => {
      expect(await part2("abc")).to.equal("05ace8e3");
    });

    it("input", async () => {
      expect(await part2(input)).to.equal("8c35d1ab");
    });
  });
});
