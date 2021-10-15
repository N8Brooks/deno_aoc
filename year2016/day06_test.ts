import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day06.ts";

const example = `eedadn
drvtee
eandsr
raavrd
atevrs
tsrnev
sdttsa
rasrtv
nssdts
ntnada
svetve
tesnvt
vntsnd
vrdear
dvrsen
enarar`;

const data = await Deno.readTextFile("year2016/day06_data.txt");

Deno.test("day06", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example", () => {
      assertEquals(part1(example), "easter");
    });

    await t.step("data", () => {
      assertEquals(part1(data), "gyvwpxaz");
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example", () => {
      assertEquals(part2(example), "advent");
    });

    await t.step("data", () => {
      assertEquals(part2(data), "jucfoary");
    });
  });
});
