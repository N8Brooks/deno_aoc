export function part1(input: string): number {
  const cups = input.split("").map((d) => +d);
  return +[...game(cups, 100, 9)].join("");
}

export function part2(input: string): number {
  const cups = input.split("").map((d) => +d);
  for (let i = 10; i <= 1_000_000; i++) cups.push(i);
  const order = game(cups, 10_000_000, 1_000_000);
  return order.next().value * order.next().value;
}

function* game(cups: number[], moves: number, last: number): Generator<number> {
  const next = Array.from({ length: cups.length }, (_, i) => i + 1);
  let cup = cups[0];

  for (const label of cups.reverse()) {
    next[label] = cup;
    cup = label;
  }

  for (let i = 0; i < moves; i++) {
    const a = next[cup];
    const b = next[a];
    const c = next[b];
    next[cup] = next[c];

    let dest = cup;
    do {
      dest = dest > 1 ? dest - 1 : last;
    } while (dest === a || dest === b || dest === c);

    [next[dest], next[c]] = [a, next[dest]];
    cup = next[cup];
  }

  cup = next[1];
  while (cup !== 1) {
    yield cup;
    cup = next[cup];
  }
}
