import { crypto } from "../deps.ts";
import { decode } from "../util.ts";

const OPEN_DOORS = [
  "b",
  "c",
  "d",
  "e",
  "f",
];

const MAX_X = 3;

const MAX_Y = 3;

const textEncoder = new TextEncoder();

class State {
  #hash?: string;

  constructor(
    public readonly password: string,
    public readonly path = "",
    public readonly x = 0,
    public readonly y = 0,
  ) {}

  async setHash(): Promise<void> {
    const data = textEncoder.encode(this.password + this.path);
    const hashBuffer = await crypto.subtle.digest("MD5", data);
    this.#hash = decode(hashBuffer);
  }

  *[Symbol.iterator](): Generator<State> {
    const [up, down, left, right] = this.#hash!;
    if (this.y > 0 && OPEN_DOORS.includes(up)) {
      yield new State(this.password, this.path + "U", this.x, this.y - 1);
    }
    if (this.y < MAX_Y && OPEN_DOORS.includes(down)) {
      yield new State(this.password, this.path + "D", this.x, this.y + 1);
    }
    if (this.x > 0 && OPEN_DOORS.includes(left)) {
      yield new State(this.password, this.path + "L", this.x - 1, this.y);
    }
    if (this.x < MAX_X && OPEN_DOORS.includes(right)) {
      yield new State(this.password, this.path + "R", this.x + 1, this.y);
    }
  }

  isVault(): boolean {
    return this.x === MAX_X && this.y === MAX_Y;
  }
}

export async function part1(input: string): Promise<string> {
  let state = new State(input);
  const queue = [];
  while (!state.isVault()) {
    await state.setHash();
    queue.push(...state);
    state = queue.shift()!;
  }
  return state.path;
}

export async function part2(input: string): Promise<number> {
  const initialState = new State(input);
  const stack = [initialState];
  let longestPath = -Infinity;
  while (stack.length) {
    const state = stack.pop()!;
    if (state.isVault()) {
      longestPath = Math.max(longestPath, state.path.length);
    } else {
      await state.setHash();
      stack.push(...state);
    }
  }
  return longestPath;
}
