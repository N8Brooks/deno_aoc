interface Spell {
  manaCost: number;
  playerHitPoints: number;
  bossHitPoints: number;
  bossHitPointEffectTimer?: number;
  playerArmorEffectTimer?: number;
  playerManaEffectTimer?: number;
}

interface State {
  spentMana: number;
  playerMana: number;
  playerHitPoints: number;
  bossHitPoints: number;
  playerArmorEffectTimer: number;
  playerManaEffectTimer: number;
  bossHitPointEffectTimer: number;
}

const spells: Spell[] = [
  { // Magic Missile
    manaCost: 53,
    playerHitPoints: 0,
    bossHitPoints: 4,
  },
  { // Drain
    manaCost: 73,
    playerHitPoints: 2,
    bossHitPoints: 2,
  },
  { // Shield
    manaCost: 113,
    playerHitPoints: 0,
    bossHitPoints: 0,
    playerArmorEffectTimer: 6,
  },
  { // Poison
    manaCost: 173,
    playerHitPoints: 0,
    bossHitPoints: 0,
    bossHitPointEffectTimer: 6,
  },
  { // Recharge
    manaCost: 229,
    playerHitPoints: 0,
    bossHitPoints: 0,
    playerManaEffectTimer: 5,
  },
];

const simulateBattle = (
  input: string,
  initialPlayerHitPoints: number,
  initialPlayerMana: number,
  hardModePenalty: number,
): number => {
  let minimumSpentManaForWin = Infinity;
  const [
    initialBossHitPoints,
    bossDamage,
  ] = [...input.matchAll(/\d+/g)].map((d) => +d);
  const stack: State[] = [{
    spentMana: 0,
    playerMana: initialPlayerMana,
    playerHitPoints: initialPlayerHitPoints,
    bossHitPoints: initialBossHitPoints,
    playerArmorEffectTimer: 0,
    playerManaEffectTimer: 0,
    bossHitPointEffectTimer: 0,
  }];
  while (stack.length) {
    const {
      spentMana: previousSpentMana,
      playerMana: previousPlayerMana,
      playerHitPoints: previousPlayerHitPoints,
      bossHitPoints: previousBossHitPoints,
      playerArmorEffectTimer: previousPlayerArmorEffectTimer,
      playerManaEffectTimer: previousPlayerManaEffectTimer,
      bossHitPointEffectTimer: previousBossHitPointEffectTimer,
    } = stack.pop()!;
    for (const spell of spells) {
      const spentMana = previousSpentMana + spell.manaCost;
      // Prune
      if (spentMana >= minimumSpentManaForWin) {
        continue;
      }
      // Effects cannot be stacked
      let playerArmorEffectTimer = previousPlayerArmorEffectTimer;
      let playerManaEffectTimer = previousPlayerManaEffectTimer;
      let bossHitPointEffectTimer = previousBossHitPointEffectTimer;
      if (
        playerArmorEffectTimer > 1 && spell.playerArmorEffectTimer ||
        playerManaEffectTimer > 1 && spell.playerManaEffectTimer ||
        bossHitPointEffectTimer > 1 && spell.bossHitPointEffectTimer
      ) {
        continue;
      }
      // Calculate mana
      let playerMana = previousPlayerMana - spell.manaCost;
      if (playerManaEffectTimer) {
        playerManaEffectTimer--;
        playerMana += 101;
      }
      if (spell.playerManaEffectTimer) {
        playerManaEffectTimer = spell.playerManaEffectTimer;
      }
      if (playerMana < 0) {
        continue; // Player lost by running out of mana
      }
      if (playerManaEffectTimer) {
        playerManaEffectTimer--;
        playerMana += 101;
      }
      // Hard mode penalty at beginning of turn
      let playerHitPoints = previousPlayerHitPoints + spell.playerHitPoints -
        hardModePenalty;
      if (playerHitPoints < 0) {
        continue;
      }
      // Calculate boss hit points
      let bossHitPoints = previousBossHitPoints - spell.bossHitPoints;
      if (bossHitPointEffectTimer) {
        bossHitPointEffectTimer--;
        bossHitPoints -= 3;
      }
      if (spell.bossHitPointEffectTimer) {
        bossHitPointEffectTimer = spell.bossHitPointEffectTimer;
      }
      if (bossHitPointEffectTimer) {
        bossHitPointEffectTimer--;
        bossHitPoints -= 3;
      }
      if (bossHitPoints <= 0) {
        minimumSpentManaForWin = spentMana; // Player won
        continue;
      }
      // Calculate player hit points
      if (playerArmorEffectTimer) {
        playerArmorEffectTimer--;
      }
      if (spell.playerArmorEffectTimer) {
        playerArmorEffectTimer = spell.playerArmorEffectTimer;
      }
      if (playerArmorEffectTimer) {
        playerArmorEffectTimer--;
        playerHitPoints -= Math.max(1, bossDamage - 7) + hardModePenalty;
      } else {
        playerHitPoints -= bossDamage + hardModePenalty;
      }
      if (playerHitPoints <= 0) {
        continue; // Player lost
      }
      // Set next state
      stack.push({
        spentMana,
        playerMana,
        bossHitPoints,
        playerHitPoints,
        bossHitPointEffectTimer,
        playerArmorEffectTimer,
        playerManaEffectTimer,
      });
    }
  }

  return minimumSpentManaForWin;
};

export function part1(
  input: string,
  initialPlayerHitPoints: number,
  initialPlayerMana: number,
): number {
  return simulateBattle(input, initialPlayerHitPoints, initialPlayerMana, 0);
}

export function part2(
  input: string,
  initialPlayerHitPoints: number,
  initialPlayerMana: number,
): number {
  return simulateBattle(input, initialPlayerHitPoints, initialPlayerMana, 1);
}
