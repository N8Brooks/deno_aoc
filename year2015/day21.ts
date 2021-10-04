import "https://deno.land/x/generator_helpers/monkey_patch.ts";
import { combinations } from "https://deno.land/x/combinatorics/combinations.ts";
import { product } from "https://deno.land/x/combinatorics/product.ts";

type Items = [number, number, number];

const WEAPS: Items[] = [
  [8, 4, 0],
  [10, 5, 0],
  [25, 6, 0],
  [40, 7, 0],
  [74, 8, 0],
];

const ARMOR: Items[] = [
  [13, 0, 1],
  [31, 0, 2],
  [53, 0, 3],
  [75, 0, 4],
  [102, 0, 5],
];

const RINGS: Items[] = [
  [25, 1, 0],
  [50, 2, 0],
  [100, 3, 0],
  [20, 0, 1],
  [40, 0, 2],
  [80, 0, 3],
];

export function part1(data: string, pHealth: number) {
  return simulate(data, pHealth, true);
}

export function part2(data: string, pHealth: number) {
  return simulate(data, pHealth, false);
}

function simulate(data: string, pHealth: number, win: boolean) {
  const [bHealth, bDamage, bArmor] = [...data.matchAll(/\d+/g)].map((d) => +d);

  const weaps: Items[] = WEAPS;
  const armor: Items[] = [[0, 0, 0], ...ARMOR];
  const rings: Items[] = [
    [0, 0, 0],
    ...RINGS,
    ...combinations(2, RINGS).map(stats),
  ];

  const costs = product(1, weaps, armor, rings)
    .map(stats)
    .filter((items) => battle(items) === win)
    .map(([cost]) => cost);

  return win ? Math.min(...costs) : Math.max(...costs);

  function battle([, pDamage, pArmor]: Items): boolean {
    const bTurns = turns(pHealth, bDamage - pArmor);
    const pTurns = turns(bHealth, pDamage - bArmor);
    return pTurns <= bTurns;
  }
}

function stats(items: Items[]): Items {
  let cost = 0, damage = 0, armor = 0;
  for (const [c, d, a] of items) {
    cost += c;
    damage += d;
    armor += a;
  }
  return [cost, damage, armor];
}

function turns(a: number, b: number): number {
  return b > 0 ? Math.ceil(a / b) : Infinity;
}
