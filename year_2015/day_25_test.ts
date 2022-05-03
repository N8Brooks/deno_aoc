import { describe, expect, it } from "../test_deps.ts";
import { part1 } from "./day_25.ts";

const input = await Deno.readTextFile("year_2015/testdata/day_25.txt");

describe("day 25", () => {
  describe("part 1", () => {
    it("example[1][1]", () => {
      expect(part1("1, 1")).to.equal(20151125);
    });

    it("example[1][2]", () => {
      expect(part1("1, 2")).to.equal(18749137);
    });

    it("example[1][3]", () => {
      expect(part1("1, 3")).to.equal(17289845);
    });

    it("example[1][4]", () => {
      expect(part1("1, 4")).to.equal(30943339);
    });

    it("example[1][5]", () => {
      expect(part1("1, 5")).to.equal(10071777);
    });

    it("example[1][6]", () => {
      expect(part1("1, 6")).to.equal(33511524);
    });

    it("example[2][1]", () => {
      expect(part1("2, 1")).to.equal(31916031);
    });

    it("example[2][2]", () => {
      expect(part1("2, 2")).to.equal(21629792);
    });

    it("example[2][3]", () => {
      expect(part1("2, 3")).to.equal(16929656);
    });

    it("example[2][4]", () => {
      expect(part1("2, 4")).to.equal(7726640);
    });

    it("example[2][5]", () => {
      expect(part1("2, 5")).to.equal(15514188);
    });

    it("example[2][6]", () => {
      expect(part1("2, 6")).to.equal(4041754);
    });

    it("example[3][1]", () => {
      expect(part1("3, 1")).to.equal(16080970);
    });

    it("example[3][2]", () => {
      expect(part1("3, 2")).to.equal(8057251);
    });

    it("example[3][3]", () => {
      expect(part1("3, 3")).to.equal(1601130);
    });

    it("example[3][4]", () => {
      expect(part1("3, 4")).to.equal(7981243);
    });

    it("example[3][5]", () => {
      expect(part1("3, 5")).to.equal(11661866);
    });

    it("example[3][6]", () => {
      expect(part1("3, 6")).to.equal(16474243);
    });

    it("example[4][1]", () => {
      expect(part1("4, 1")).to.equal(24592653);
    });

    it("example[4][2]", () => {
      expect(part1("4, 2")).to.equal(32451966);
    });

    it("example[4][3]", () => {
      expect(part1("4, 3")).to.equal(21345942);
    });

    it("example[4][4]", () => {
      expect(part1("4, 4")).to.equal(9380097);
    });

    it("example[4][5]", () => {
      expect(part1("4, 5")).to.equal(10600672);
    });

    it("example[4][6]", () => {
      expect(part1("4, 6")).to.equal(31527494);
    });

    it("example[5][1]", () => {
      expect(part1("5, 1")).to.equal(77061);
    });

    it("example[5][2]", () => {
      expect(part1("5, 2")).to.equal(17552253);
    });

    it("example[5][3]", () => {
      expect(part1("5, 3")).to.equal(28094349);
    });

    it("example[5][4]", () => {
      expect(part1("5, 4")).to.equal(6899651);
    });

    it("example[5][5]", () => {
      expect(part1("5, 5")).to.equal(9250759);
    });

    it("example[5][6]", () => {
      expect(part1("5, 6")).to.equal(31663883);
    });

    it("example[6][1]", () => {
      expect(part1("6, 1")).to.equal(33071741);
    });

    it("example[6][2]", () => {
      expect(part1("6, 2")).to.equal(6796745);
    });

    it("example[6][3]", () => {
      expect(part1("6, 3")).to.equal(25397450);
    });

    it("example[6][4]", () => {
      expect(part1("6, 4")).to.equal(24659492);
    });

    it("example[6][5]", () => {
      expect(part1("6, 5")).to.equal(1534922);
    });

    it("example[6][6]", () => {
      expect(part1("6, 6")).to.equal(27995004);
    });

    it("input", () => {
      expect(part1(input)).to.equal(19980801);
    });
  });
});
