export function part1(input: string): number {
  let [
    player1Position,
    player2Position,
  ] = [...input.matchAll(/\d+$/gm)].map((d) => +d - 1);
  let player1Turn = 1;
  let player1Score = 0;
  let player2Score = 0;
  let dice = 0;

  // This is a branchless approach where player turns are `0` or `1`
  while (player1Score < 1000 && player2Score < 1000) {
    const player2Turn = 1 - player1Turn;
    const roll = dice++ % 100 + dice++ % 100 + dice++ % 100 + 3;
    player1Position = (player1Position + player1Turn * roll) % 10;
    player2Position = (player2Position + player2Turn * roll) % 10;
    player1Score += player1Turn * (player1Position + 1);
    player2Score += player2Turn * (player2Position + 1);
    player1Turn = player2Turn;
  }

  return dice * Math.min(player1Score, player2Score);
}

/** The dice roll associated with the count of how many time it is rolled */
const DIRAC_DICE_ROLLS = [
  [3, 1],
  [4, 3],
  [5, 6],
  [6, 7],
  [7, 6],
  [8, 3],
  [9, 1],
];

export function part2(input: string): number {
  const [
    player1Position,
    player2Position,
  ] = [...input.matchAll(/\d+$/gm)].map((d) => +d - 1);
  const memo: [number, number][] = Array(44100);
  return Math.max(
    ...diracGame(
      player1Position,
      player2Position,
      0,
      0,
    ),
  );

  /** Returns count of wins for each player from the given state */
  function diracGame(
    previousPlayerPosition: number, // [0, 9]
    otherPlayerPosition: number, // [0, 9]
    previousPlayerScore: number, // [0, 21)
    otherPlayerScore: number, // [0, 21)
  ): [number, number] {
    const key = 4410 * previousPlayerPosition +
      441 * otherPlayerPosition +
      21 * previousPlayerScore +
      otherPlayerScore;
    if (memo[key]) {
      return memo[key];
    }

    let currentPlayerWins = 0, otherPlayerWins = 0;
    for (const [roll, count] of DIRAC_DICE_ROLLS) {
      const currentPlayerPosition = (previousPlayerPosition + roll) % 10 + 1;
      const currentPlayerScore = previousPlayerScore + currentPlayerPosition;
      if (currentPlayerScore >= 21) {
        currentPlayerWins += count;
        continue;
      }
      const [
        additionalOtherPlayerWins,
        additionalCurrentPlayerWins,
      ] = diracGame(
        otherPlayerPosition,
        currentPlayerPosition - 1,
        otherPlayerScore,
        currentPlayerScore,
      );
      currentPlayerWins += count * additionalCurrentPlayerWins;
      otherPlayerWins += count * additionalOtherPlayerWins;
    }

    return memo[key] = [currentPlayerWins, otherPlayerWins];
  }
}
