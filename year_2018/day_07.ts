const UPPERCASE_A_CHAR_CODE = "A".charCodeAt(0);

/** Parsed graph of predecessors and successors for input steps */
const parseSteps = (input: string) => {
  const successors: number[][] = Array.from({ length: 26 }, () => []);
  const predecessors: (number | undefined)[] = Array(26);
  for (const line of input.split("\n")) {
    const predecessor = line[5].charCodeAt(0) - UPPERCASE_A_CHAR_CODE;
    const successor = line[36].charCodeAt(0) - UPPERCASE_A_CHAR_CODE;
    successors[predecessor].push(successor);
    predecessors[predecessor] ??= 0;
    predecessors[successor] = (predecessors[successor] ?? 0) + 1;
  }
  for (const nodes of successors) {
    nodes.sort((a, b) => a - b);
  }
  return { successors, predecessors };
};

export function part1(input: string): string {
  const { successors, predecessors } = parseSteps(input);
  const queue: number[] = Array
    .from({ length: 26 }, (_, node) => node)
    .filter((node) => predecessors[node] === 0);
  const order: number[] = [];
  while (queue.length) {
    const predecessor = queue.sort((a, b) => a - b).shift()!;
    order.push(predecessor + UPPERCASE_A_CHAR_CODE);
    for (const successor of successors[predecessor]) {
      if (!--predecessors[successor]!) {
        queue.push(successor);
      }
    }
  }
  return String.fromCharCode(...order);
}

/** Given day 7 `input` with step constant `c` and `n` workers */
export function part2(input: string, n: number, c: number): number {
  const { successors, predecessors } = parseSteps(input);
  const queue: number[] = Array
    .from({ length: 26 }, (_, node) => node)
    .filter((node) => predecessors[node] === 0);
  const updateQueue = () => {
    while (queue.length && events.length < n) {
      const step = Math.min(...queue);
      const index = queue.indexOf(step);
      queue.splice(index, 1);
      const endTime = startTime + step + c + 1;
      events.push({ step, endTime });
    }
  };
  const events: { endTime: number; step: number }[] = [];
  let startTime = 0;
  updateQueue();
  while (events.length) {
    const event = events.reduce((a, b) => a.endTime < b.endTime ? a : b);
    startTime = event.endTime;
    const index = events.indexOf(event);
    events.splice(index, 1);
    for (const successor of successors[event.step]) {
      if (!--predecessors[successor]!) {
        queue.push(successor);
      }
    }
    updateQueue();
  }
  return startTime;
}
