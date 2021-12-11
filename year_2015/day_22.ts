interface Spell {
  mana?: number[];
  damage?: number[];
  hitPoints?: number[];
  armor?: number[];
}

interface State {
  spentMana: number;
  playerHitPoints: number[];
  playerArmor: number[];
  playerMana: number[];
  bossHitPoints: number[];
}

const spells: Spell[] = [
  { // Magic Missile
    mana: [-43],
    damage: [4],
  },
  { // Drain
    mana: [-73],
    damage: [2],
    hitPoints: [2],
  },
  { // Shield
    mana: [-113],
    armor: [0, 7, 7, 7, 7, 7, 7],
  },
  { // Poison
    mana: [-173],
    damage: [0, 3, 3, 3, 3, 3, 3],
  },
  { // Recharge
    mana: [-229, 101, 101, 101, 101, 101],
  },
];

export function part1(
  input: string,
  initialPlayerHitPoints: number,
  initialPlayerMana: number,
): number {
  const [initialBossHitPoints, bossDamage] = [...input.matchAll(/\d+/g)]
    .map((d) => +d);
  let minimumManaForWin = Infinity;
  const stack: State[] = [{
    spentMana: 0,
    playerHitPoints: [initialPlayerHitPoints],
    playerArmor: [0],
    playerMana: [initialPlayerMana],
    bossHitPoints: [initialBossHitPoints],
  }];
  while (stack.length) {
    const {
      spentMana,
      playerHitPoints: [currentPlayerHitPoints, ...futurePlayerHitPoints],
      playerArmor: [currentPlayerArmor, ...futurePlayerArmor],
      playerMana: [currentPlayerMana, ...futurePlayerMana],
      bossHitPoints: [currentBossHitPoints, ...futureBossHitPoints],
    } = stack.shift()!;
    if (spentMana >= minimumManaForWin) {
      continue;
    }
    for (const spell of spells) {
    }
  }
  return minimumManaForWin;
}

export function part2(input: string): number {
  return -1;
}
