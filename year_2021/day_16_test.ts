import { describe, expect, it } from "../test_deps.ts";
import { part1, part2 } from "./day_16.ts";

const input = await Deno.readTextFile("year_2021/testdata/day_16.txt");

describe("day 16", () => {
  describe("part 1", () => {
    it("example 1", () => {
      expect(part1("8A004A801A8002F478")).to.equal(16);
    });

    it("example 2", () => {
      expect(part1("620080001611562C8802118E34")).to.equal(12);
    });

    it("example 3", () => {
      expect(part1("C0015000016115A2E0802F182340")).to.equal(23);
    });

    it("example 4", () => {
      expect(part1("A0016C880162017C3686B18A3D4780")).to.equal(31);
    });

    it("input", () => {
      expect(part1(input)).to.equal(901);
    });
  });

  describe("part 2", () => {
    it("example 1", () => {
      expect(part2("C200B40A82")).to.equal(3);
    });

    it("example 2", () => {
      expect(part2("04005AC33890")).to.equal(54);
    });

    it("example 3", () => {
      expect(part2("880086C3E88112")).to.equal(7);
    });

    it("example 4", () => {
      expect(part2("CE00C43D881120")).to.equal(9);
    });

    it("example 5", () => {
      expect(part2("D8005AC2A8F0")).to.equal(1);
    });

    it("example 6", () => {
      expect(part2("F600BC2D8F")).to.equal(0);
    });

    it("example 7", () => {
      expect(part2("9C005AC2F8F0")).to.equal(0);
    });

    it("example 8", () => {
      expect(part2("9C0141080250320F1802104A08")).to.equal(1);
    });

    it("input", () => {
      expect(part2(input)).to.equal(110434737925);
    });
  });
});
