import { assertEquals } from "https://deno.land/std@0.109.0/testing/asserts.ts";
import { part1, part2 } from "./day12.ts";

const data = await Deno.readTextFile("year2015/day12_data.txt");

Deno.test("day12", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1("[1,2,3]"), 6);
    });

    await t.step("example2", () => {
      assertEquals(part1('{"a":2,"b":4}'), 6);
    });

    await t.step("example3", () => {
      assertEquals(part1("[[[3]]]"), 3);
    });

    await t.step("example4", () => {
      assertEquals(part1('{"a":{"b":4},"c":-1}'), 3);
    });

    await t.step("example5", () => {
      assertEquals(part1('{"a":[-1,1]}'), 0);
    });

    await t.step("example6", () => {
      assertEquals(part1('[-1,{"a":1}]'), 0);
    });

    await t.step("example7", () => {
      assertEquals(part1("[]"), 0);
    });

    await t.step("example8", () => {
      assertEquals(part1("{}"), 0);
    });

    await t.step("example9", () => {
      assertEquals(part1('[1,{"c":"red","b":2},3]'), 6);
    });

    await t.step("example10", () => {
      assertEquals(part1('{"d":"red","e":[1,2,3,4],"f":5}'), 15);
    });

    await t.step("example11", () => {
      assertEquals(part1('[1,"red",5]'), 6);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 191164);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1("[1,2,3]"), 6);
    });

    await t.step("example2", () => {
      assertEquals(part2('{"a":2,"b":4}'), 6);
    });

    await t.step("example3", () => {
      assertEquals(part2("[[[3]]]"), 3);
    });

    await t.step("example4", () => {
      assertEquals(part2('{"a":{"b":4},"c":-1}'), 3);
    });

    await t.step("example5", () => {
      assertEquals(part2('{"a":[-1,1]}'), 0);
    });

    await t.step("example6", () => {
      assertEquals(part2('[-1,{"a":1}]'), 0);
    });

    await t.step("example7", () => {
      assertEquals(part2("[]"), 0);
    });

    await t.step("example8", () => {
      assertEquals(part2("{}"), 0);
    });

    await t.step("example9", () => {
      assertEquals(part2('[1,{"c":"red","b":2},3]'), 4);
    });

    await t.step("example10", () => {
      assertEquals(part2('{"d":"red","e":[1,2,3,4],"f":5}'), 0);
    });

    await t.step("example11", () => {
      assertEquals(part2('[1,"red",5]'), 6);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 87842);
    });
  });
});
