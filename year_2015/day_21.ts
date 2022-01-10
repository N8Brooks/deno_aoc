import { cartesianProduct, combinations } from "../deps.ts";

type Stats = [number, number, number];

const WEAPONS: Stats[] = [
  [8, 4, 0],
  [10, 5, 0],
  [25, 6, 0],
  [40, 7, 0],
  [74, 8, 0],
];

const ARMOR: Stats[] = [
  [13, 0, 1],
  [31, 0, 2],
  [53, 0, 3],
  [75, 0, 4],
  [102, 0, 5],
];

const RINGS: Stats[] = [
  [25, 1, 0],
  [50, 2, 0],
  [100, 3, 0],
  [20, 0, 1],
  [40, 0, 2],
  [80, 0, 3],
];

/** Returns the net `Stats` for multiple items */
const sumStats = (items: Stats[]): Stats => {
  let cost = 0, damage = 0, armor = 0;
  for (const [c, d, a] of items) {
    cost += c;
    damage += d;
    armor += a;
  }
  return [cost, damage, armor];
};

/** All possible layouts of weapons, armor, and rings */
const EQUIPMENT = [...cartesianProduct(
  WEAPONS,
  [[0, 0, 0], ...ARMOR] as Stats[],
  [
    [0, 0, 0],
    ...RINGS,
    ...[...combinations(RINGS, 2)].map(sumStats),
  ] as Stats[],
)].map(sumStats);

/** The amount of turns for the given damage and health */
const turns = (health: number, damage: number): number => {
  return damage > 0 ? Math.ceil(health / damage) : Infinity;
};

/** Simulates all possible battles */
const simulate = (input: string, playerHealth: number, win: boolean) => {
  const [
    bossHealth,
    bossDamage,
    bossArmor,
  ] = [...input.matchAll(/\d+/g)].map((d) => +d);

  const costs = EQUIPMENT
    .filter(([, playerDamage, playerArmor]) => {
      const bTurns = turns(playerHealth, bossDamage - playerArmor);
      const pTurns = turns(bossHealth, playerDamage - bossArmor);
      return pTurns <= bTurns === win;
    })
    .map(([cost]) => cost);

  return win ? Math.min(...costs) : Math.max(...costs);
};

export function part1(input: string, playerHealth: number) {
  return simulate(input, playerHealth, true);
}

export function part2(input: string, playerHealth: number) {
  return simulate(input, playerHealth, false);
}
