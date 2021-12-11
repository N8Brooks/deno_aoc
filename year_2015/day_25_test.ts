import { expect } from "../test_deps.ts";
import { part1 } from "./day25.ts";

const input = await Deno.readTextFile("year2015/testdata/day25.txt");

describe("day25", () => {
  describe("part1", () => {
    it("example[1][1]", () => {
      expect(part1("1, 1")).to.equal(20151125n);
    });

    it("example[1][2]", () => {
      expect(part1("1, 2")).to.equal(18749137n);
    });

    it("example[1][3]", () => {
      expect(part1("1, 3")).to.equal(17289845n);
    });

    it("example[1][4]", () => {
      expect(part1("1, 4")).to.equal(30943339n);
    });

    it("example[1][5]", () => {
      expect(part1("1, 5")).to.equal(10071777n);
    });

    it("example[1][6]", () => {
      expect(part1("1, 6")).to.equal(33511524n);
    });

    it("example[2][1]", () => {
      expect(part1("2, 1")).to.equal(31916031n);
    });

    it("example[2][2]", () => {
      expect(part1("2, 2")).to.equal(21629792n);
    });

    it("example[2][3]", () => {
      expect(part1("2, 3")).to.equal(16929656n);
    });

    it("example[2][4]", () => {
      expect(part1("2, 4")).to.equal(7726640n);
    });

    it("example[2][5]", () => {
      expect(part1("2, 5")).to.equal(15514188n);
    });

    it("example[2][6]", () => {
      expect(part1("2, 6")).to.equal(4041754n);
    });

    it("example[3][1]", () => {
      expect(part1("3, 1")).to.equal(16080970n);
    });

    it("example[3][2]", () => {
      expect(part1("3, 2")).to.equal(8057251n);
    });

    it("example[3][3]", () => {
      expect(part1("3, 3")).to.equal(1601130n);
    });

    it("example[3][4]", () => {
      expect(part1("3, 4")).to.equal(7981243n);
    });

    it("example[3][5]", () => {
      expect(part1("3, 5")).to.equal(11661866n);
    });

    it("example[3][6]", () => {
      expect(part1("3, 6")).to.equal(16474243n);
    });

    it("example[4][1]", () => {
      expect(part1("4, 1")).to.equal(24592653n);
    });

    it("example[4][2]", () => {
      expect(part1("4, 2")).to.equal(32451966n);
    });

    it("example[4][3]", () => {
      expect(part1("4, 3")).to.equal(21345942n);
    });

    it("example[4][4]", () => {
      expect(part1("4, 4")).to.equal(9380097n);
    });

    it("example[4][5]", () => {
      expect(part1("4, 5")).to.equal(10600672n);
    });

    it("example[4][6]", () => {
      expect(part1("4, 6")).to.equal(31527494n);
    });

    it("example[5][1]", () => {
      expect(part1("5, 1")).to.equal(77061n);
    });

    it("example[5][2]", () => {
      expect(part1("5, 2")).to.equal(17552253n);
    });

    it("example[5][3]", () => {
      expect(part1("5, 3")).to.equal(28094349n);
    });

    it("example[5][4]", () => {
      expect(part1("5, 4")).to.equal(6899651n);
    });

    it("example[5][5]", () => {
      expect(part1("5, 5")).to.equal(9250759n);
    });

    it("example[5][6]", () => {
      expect(part1("5, 6")).to.equal(31663883n);
    });

    it("example[6][1]", () => {
      expect(part1("6, 1")).to.equal(33071741n);
    });

    it("example[6][2]", () => {
      expect(part1("6, 2")).to.equal(6796745n);
    });

    it("example[6][3]", () => {
      expect(part1("6, 3")).to.equal(25397450n);
    });

    it("example[6][4]", () => {
      expect(part1("6, 4")).to.equal(24659492n);
    });

    it("example[6][5]", () => {
      expect(part1("6, 5")).to.equal(1534922n);
    });

    it("example[6][6]", () => {
      expect(part1("6, 6")).to.equal(27995004n);
    });

    it("input", () => {
      expect(part1(input)).to.equal(19980801n);
    });
  });
});
