import { assertEquals } from "https://deno.land/std@0.108.0/testing/asserts.ts";
import { part1, part2 } from "./day09.ts";

const example1 = `7
2
24
11
5
16
22
6
25
8
17
15
20
14
4
21
23
19
18
9
3
10
1
13
12
26
49
100
50`;

const example2 = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;

const data = await Deno.readTextFile("year2020/day09_data.txt");

Deno.test("day09", async (t) => {
  await t.step("part1", async (t) => {
    await t.step("example1", () => {
      assertEquals(part1(example1, 25), 100);
    });

    await t.step("example2", () => {
      assertEquals(part1(example2, 5), 127);
    });

    await t.step("data", () => {
      assertEquals(part1(data, 25), 22477624);
    });
  });

  await t.step("part2", async (t) => {
    await t.step("example1", () => {
      assertEquals(part2(example1, 25), 61);
    });

    await t.step("example2", () => {
      assertEquals(part2(example2, 5), 62);
    });

    await t.step("data", () => {
      assertEquals(part2(data, 25), 2980044);
    });
  });
});
