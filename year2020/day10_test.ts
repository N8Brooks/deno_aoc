import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day10.ts";

const example1 = `16
10
15
5
1
11
7
19
6
12
4`;

const example2 = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

const data = await Deno.readTextFile("year2020/day10_data.txt");

Deno.test("day10", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1(example1), 35);
    });

    await t.step("example2", () => {
      assertEquals(part1(example2), 220);
    });

    await t.step("data", () => {
      assertEquals(part1(data), 2760);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example1", () => {
      assertEquals(part2(example1), 8);
    });

    await t.step("example2", () => {
      assertEquals(part2(example2), 19208);
    });

    await t.step("data", () => {
      assertEquals(part2(data), 13816758796288);
    });
  });
});
