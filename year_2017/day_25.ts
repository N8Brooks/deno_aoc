interface Body {
  write: 0 | 1;
  move: -1 | 1;
  next: string;
}

const parseBody = (write: string, move: string, next: string): Body => {
  return {
    write: write.includes("0") ? 0 : 1,
    move: move.includes("left") ? -1 : 1,
    next: next.match(/state ([A-Z])/)![1],
  };
};

const parseStates = (statesInput: string[]): Record<string, Body[]> => {
  const statesEntries = statesInput
    .map((stateInput) => {
      const [
        stateName,
        _ifTheCurrentValueIs0,
        write0,
        move0,
        next0,
        _ifTheCurrentValueIs1,
        write1,
        move1,
        next1,
      ] = stateInput.split("\n");
      const stateKey = stateName.match(/state ([A-Z])/)![1];
      const stateValue = [
        parseBody(write0, move0, next0),
        parseBody(write1, move1, next1),
      ];
      return [stateKey, stateValue];
    });
  return Object.fromEntries(statesEntries);
};

export function part1(input: string): number {
  const [metaInput, ...statesInput] = input.split("\n\n");
  const states = parseStates(statesInput);
  let name = metaInput.match(/state ([A-Z])/)![1];
  const stop = +metaInput.match(/(\d+) steps/)![1];
  const tape: (0 | 1)[] = [];
  let cursor = 0;
  for (let i = 0; i < stop; i++) {
    const state = states[name];
    const value = tape[cursor] ?? 0;
    const body = state[value];
    if (cursor < 0) {
      tape.unshift(body.write);
      cursor = body.move;
    } else {
      tape[cursor] = body.write;
      cursor += body.move;
    }
    name = body.next;
  }
  let checksum = 0;
  for (const value of tape) {
    if (value) {
      checksum++;
    }
  }
  return checksum;
}
