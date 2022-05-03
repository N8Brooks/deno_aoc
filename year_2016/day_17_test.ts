import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_17.ts";

const EXAMPLE_1 = "ihgpwlah";

const EXAMPLE_2 = "kglvqrro";

const EXAMPLE_3 = "ulqzkmiv";

const input = await Deno.readTextFile("year_2016/testdata/day_17.txt");

describe("day 17", () => {
  describe("part 1", () => {
    it("example 1", async () => {
      expect(await part1(EXAMPLE_1)).to.equal("DDRRRD");
    });

    it("example 2", async () => {
      expect(await part1(EXAMPLE_2)).to.equal("DDUDRLRRUDRD");
    });

    it("example 3", async () => {
      expect(await part1(EXAMPLE_3)).to.equal("DRURDRUDDLLDLUURRDULRLDUUDDDRR");
    });

    it("input", async () => {
      expect(await part1(input)).to.equal("DDURRLRRDD");
    });
  });

  describe("part 2", () => {
    it("example 1", async () => {
      expect(await part2(EXAMPLE_1)).to.equal(370);
    });

    it("example 2", async () => {
      expect(await part2(EXAMPLE_2)).to.equal(492);
    });

    it("example 3", async () => {
      expect(await part2(EXAMPLE_3)).to.equal(830);
    });

    it("input", async () => {
      expect(await part2(input)).to.equal(436);
    });
  });
});
