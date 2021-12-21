export function part1(input: string): number {
  let [
    player1Position,
    player2Position,
  ] = [...input.matchAll(/\d+$/gm)].map((d) => +d - 1);
  let player1Turn = 1;
  let player1Score = 0;
  let player2Score = 0;
  let dice = 0;

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
  const memo: [number, number][] = Array(88200);
  return Math.max(
    ...diracGame(
      1,
      player1Position,
      player2Position,
      0,
      0,
    ),
  );

  /** Returns count of wins for player 1 and 2 from the given state */
  function diracGame(
    player1Turn: number, // [0, 1]
    previousPlayer1Position: number, // [0, 9]
    previousPlayer2Position: number, // [0, 9]
    player1Score: number, // [0, 21)
    player2Score: number, // [0, 21)
  ): [number, number] {
    if (player1Score >= 21) {
      return [1, 0];
    }
    if (player2Score >= 21) {
      return [0, 1];
    }

    const key = 44100 * player1Turn +
      4410 * previousPlayer1Position +
      441 * previousPlayer2Position +
      21 * player1Score +
      player2Score;
    if (memo[key]) {
      return memo[key];
    }

    let player1Wins = 0, player2Wins = 0;
    const player2Turn = 1 - player1Turn;
    for (const [roll, count] of DIRAC_DICE_ROLLS) {
      const currentPlayer1Position =
        (previousPlayer1Position + player1Turn * roll) % 10;
      const currentPlayer2Position =
        (previousPlayer2Position + player2Turn * roll) % 10;
      const [
        additionalPlayer1Wins,
        additionalPlayer2Wins,
      ] = diracGame(
        player2Turn,
        currentPlayer1Position,
        currentPlayer2Position,
        player1Score + player1Turn * (currentPlayer1Position + 1),
        player2Score + player2Turn * (currentPlayer2Position + 1),
      );
      player1Wins += count * additionalPlayer1Wins;
      player2Wins += count * additionalPlayer2Wins;
    }

    return memo[key] = [player1Wins, player2Wins];
  }
}
