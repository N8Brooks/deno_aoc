export function part1(input: string): number {
  const [player1Input, player2Input] = input.split("\n\n");
  const player1Deck = player1Input.substr(10).split("\n").map((d) => +d);
  const player2Deck = player2Input.substr(10).split("\n").map((d) => +d);
  while (player1Deck.length && player2Deck.length) {
    const player1Card = player1Deck.shift()!;
    const player2Card = player2Deck.shift()!;
    if (player1Card > player2Card) {
      player1Deck.push(player1Card, player2Card);
    } else {
      player2Deck.push(player2Card, player1Card);
    }
  }
  return [...player1Deck, ...player2Deck].reduce(
    (score, card, index, deck) => score + card * (deck.length - index),
    0,
  );
}

export function part2(input: string): number {
  const [player1Input, player2Input] = input.split("\n\n");
  const player1Deck = player1Input.substr(10).split("\n").map((d) => +d);
  const player2Deck = player2Input.substr(10).split("\n").map((d) => +d);
  player1Wins(player1Deck, player2Deck);
  return [...player1Deck, ...player2Deck].reduce(
    (score, card, index, deck) => score + card * (deck.length - index),
    0,
  );

  function player1Wins(
    player1Deck: number[],
    player2Deck: number[],
  ): boolean {
    const player1MaxCard = Math.max(...player1Deck);
    const player2MaxCard = Math.max(...player2Deck);
    if (player1MaxCard > player2MaxCard) {
      return true;
    }
    const rounds: Set<string> = new Set();
    while (player1Deck.length && player2Deck.length) {
      const round = `${player1Deck};${player2Deck}`;
      if (rounds.has(round)) {
        return true;
      }
      rounds.add(round);
      const player1Card = player1Deck.shift()!;
      const player2Card = player2Deck.shift()!;
      if (
        player1Deck.length >= player1Card && player2Deck.length >= player2Card
          ? player1Wins(
            player1Deck.slice(0, player1Card),
            player2Deck.slice(0, player2Card),
          )
          : player1Card > player2Card
      ) {
        player1Deck.push(player1Card, player2Card);
      } else {
        player2Deck.push(player2Card, player1Card);
      }
    }
    return !!player1Deck.length;
  }
}
