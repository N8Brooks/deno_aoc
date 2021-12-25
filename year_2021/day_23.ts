/** The board is indexed 1 dimensionally as follows:
 * ┏━━┓  ┏━━┓  ┏━━┓  ┏━━┓  ┏━━┓  ┏━━┓  ┏━━┓
 * ┃00┃01┃02┃03┃04┃04┃06┃05┃08┃06┃10┃07┃12┃
 * ┗━━┛  ┗━━╃──╄━━╃──╄━━╃──╄━━╃──╄━━┛  ┗━━┛
 *          │  │  │  │  │  │  │  │
 *          ├──┤  ├──┤  ├──┤  ├──┤
 *          │  │  │  │  │  │  │  │
 *          └──┘  └──┘  └──┘  └──┘
 */

/** Represents current position of amphipod */
enum AmphipodPosition {
  Start = 0,
  Hall = 1,
  Stop = 2,
}

/** A single creature from the problem */
abstract class Amphipod {
  /** The energy required for this `Amphipod` to take a single step */
  abstract energy: number;

  /** The x location of the `Amphipod`'s home */
  abstract targetX: number;

  /** The value id of the class */
  abstract value: number;

  /** Cache value of */
  #valueOf?: number;

  /** Reference to implementations class */
  abstract clone: new (
    x: number,
    y: number,
    position: AmphipodPosition,
  ) => Amphipod;

  constructor(
    public x: number,
    public y: number,
    public position: AmphipodPosition,
  ) {}

  /** `Amphipod` factory */
  static from(char: string, x: number, y: number): Amphipod {
    switch (char) {
      case "A":
        return new AmberAmphipod(x, y, AmphipodPosition.Start);
      case "B":
        return new BronzeAmphipod(x, y, AmphipodPosition.Start);
      case "C":
        return new CopperAmphipod(x, y, AmphipodPosition.Start);
      case "D":
        return new DesertAmphipod(x, y, AmphipodPosition.Start);
    }
    throw Error(`Character ${char} does not represent an amphipod`);
  }

  /** Moves where `Amphipod` is currently in its starting room */
  *movesFromStart(state: State): Generator<[number, Amphipod]> {
    const first = state.rooms[this.x].find((amphipod) => amphipod);
    if (first !== this) {
      return;
    }
    let xLeft = this.x - 1;
    while (xLeft >= 0 && !state.halls[xLeft]) {
      const steps = this.x - xLeft + this.y - +(xLeft === 0);
      const cost = this.energy * steps;
      const amphipod = new this.clone(xLeft, 0, AmphipodPosition.Hall);
      yield [cost, amphipod];
      xLeft -= 2;
    }
    let xRight = this.x + 1;
    while (xRight <= 12 && !state.halls[xRight]) {
      const steps = xRight - this.x + this.y - +(xRight === 12);
      const cost = this.energy * steps;
      const amphipod = new this.clone(xRight, 0, AmphipodPosition.Hall);
      yield [cost, amphipod];
      xRight += 2;
    }
  }

  /** Moves where `Amphipod` is currently in the hall */
  moveFromHall(state: State): [number, Amphipod] | undefined {
    const room = state.rooms[this.targetX];
    if (
      room
        .filter((amphipod) => amphipod)
        .some((amphipod) => amphipod!.position !== AmphipodPosition.Stop)
    ) {
      return;
    }
    for (let x = this.x + 2; x < this.targetX; x += 2) {
      if (state.halls[x]) {
        return;
      }
    }
    for (let x = this.x - 2; x > this.targetX; x -= 2) {
      if (state.halls[x]) {
        return;
      }
    }
    const y = room.findLastIndex((amphipod) => !amphipod) + 1;
    const adjustment = +(this.x === 0) - +(this.x === 12);
    const steps = Math.abs(this.x + adjustment - this.targetX) + y;
    const cost = steps * this.energy;
    const amphipod = new this.clone(this.targetX, y, AmphipodPosition.Stop);
    return [cost, amphipod];
  }

  /** Lower bound based on `x` distance required */
  heuristicX(): number {
    return this.energy * Math.abs(this.targetX - this.x);
  }

  /** Return the value of this as an integer */
  valueOf(): number {
    return this.#valueOf ??= this.value * 5 ** this.index;
  }

  /** The `index` of this where each possible position increments the `index` by 1 */
  get index(): number {
    return this.y === 0 ? this.x / 2 : 3 + this.y * 4 + (this.x - 3) / 2;
  }
}

class AmberAmphipod extends Amphipod {
  readonly energy = 1;
  readonly targetX = 3;
  readonly clone = AmberAmphipod;
  readonly value = 1;
}

class BronzeAmphipod extends Amphipod {
  readonly energy = 10;
  readonly targetX = 5;
  readonly clone = BronzeAmphipod;
  readonly value = 2;
}

class CopperAmphipod extends Amphipod {
  readonly energy = 100;
  readonly targetX = 7;
  readonly clone = CopperAmphipod;
  readonly value = 3;
}

class DesertAmphipod extends Amphipod {
  readonly energy = 1000;
  readonly targetX = 9;
  readonly clone = DesertAmphipod;
  readonly value = 4;
}

/** A possible partially or fully complete situation */
class State {
  /** Current lower bound of completing a path including this `State` */
  readonly fScore: number;

  constructor(
    public readonly halls: Record<number, Amphipod | undefined>,
    public readonly rooms: Record<number, (Amphipod | undefined)[]>,
    public readonly gScore: number,
  ) {
    this.fScore = gScore + this.heuristic();
  }

  /** Returns a state from the given problem `input` */
  static from(input: string): State {
    const rooms: Record<number, Amphipod[]> = {};
    for (let x = 3; x <= 9; x += 2) {
      rooms[x] = [];
      let char: string, y = 1;
      while ((char = input[14 * y + x + 14] ?? "#") !== "#") {
        rooms[x].push(Amphipod.from(char, x, y));
        y++;
      }
    }
    return new State(Array(13), rooms, 0);
  }

  /** Marks `Amphipod`s as stopped if they are in the correct position */
  amortize(): void {
    Object.entries(this.rooms).forEach(([x, room]) => {
      for (let y = room.length - 1; y >= 0; y--) {
        const amphipod = room[y];
        if (amphipod!.targetX === +x) {
          amphipod!.position = AmphipodPosition.Stop;
        } else {
          break;
        }
      }
    });
  }

  /** Yields all possible states from current state */
  *[Symbol.iterator]() {
    for (const room of Object.values(this.rooms)) {
      for (const amphipod0 of room) {
        if (!amphipod0) {
          continue;
        }
        for (const [cost, amphipod1] of amphipod0.movesFromStart(this)) {
          const halls = { ...this.halls };
          halls[amphipod1.x] = amphipod1;
          const rooms = { ...this.rooms };
          const room = [...rooms[amphipod0.x]];
          rooms[amphipod0.x] = room;
          room[amphipod0.y - 1] = undefined;
          const state = new State(halls, rooms, this.gScore + cost);
          yield state;
        }
      }
    }
    for (const amphipod0 of Object.values(this.halls)) {
      if (!amphipod0) {
        continue;
      }
      const move = amphipod0.moveFromHall(this);
      if (!move) {
        continue;
      }
      const [cost, amphipod1] = move;
      const halls = { ...this.halls };
      halls[amphipod0.x] = undefined;
      const rooms = { ...this.rooms };
      const room = [...rooms[amphipod1.x]];
      rooms[amphipod1.x] = room;
      room[amphipod1.y - 1] = amphipod1;
      const state = new State(halls, rooms, this.gScore + cost);
      yield state;
    }
  }

  /** Returns if this is the target positioning of `Amphipod`s */
  isComplete(): boolean {
    return Object.values(this.rooms).every((room) =>
      room.every((amphipod) => amphipod?.position === AmphipodPosition.Stop)
    );
  }

  /** Energy to complete state if amphipods can pass through one another */
  heuristic(): number {
    // Energy to travel to appropriate x coordinate
    let totalHeuristic = Object.values(this.halls).reduce((sum, amphipod) => {
      return amphipod ? sum + amphipod.heuristicX() : sum;
    }, 0);
    Object.values(this.rooms).forEach((room, x) => {
      const energy = 10 ** x;
      room.forEach((amphipod, y) => {
        if (amphipod) {
          if (amphipod.position === AmphipodPosition.Stop) {
            return;
          }
          // Energy to leave this room and x distance to its own room
          totalHeuristic += (y + 1) * amphipod.energy + amphipod.heuristicX();
        } else {
          // Energy for y distance to enter room
          totalHeuristic += (y + 1) * energy;
        }
      });
    });
    return totalHeuristic;
  }

  /** Return the value of this as an integer */
  valueOf(): number {
    // These values could possibly be larger than max safe integer
    let totalValue = Object.values(this.halls).reduce((sum, amphipod) => {
      return amphipod ? sum + amphipod.valueOf() : sum;
    }, 0);
    for (const room of Object.values(this.rooms)) {
      totalValue += room.reduce((sum, amphipod) => {
        return amphipod ? sum + amphipod.valueOf() : sum;
      }, 0);
    }
    return totalValue;
  }
}

const minimumEnergy = (
  startingState: State,
  openHeapLength: number,
): number => {
  startingState.amortize();

  const openSet: Map<number, State> = new Map();
  openSet.set(startingState.valueOf(), startingState);

  const openHeap: State[][] = Array.from({ length: openHeapLength }, () => []);
  openHeap[0].push(startingState);
  let pointer = 0;

  while (true) {
    const currentState = openHeap[pointer].pop()!;
    while (pointer < openHeapLength && !openHeap[pointer].length) {
      pointer++;
    }
    if (currentState.isComplete()) {
      return currentState.gScore;
    }

    for (const nextState of currentState) {
      const nextStateKey = nextState.valueOf();
      const previousState = openSet.get(nextStateKey);

      if (nextState.gScore < (previousState?.gScore ?? Infinity)) {
        openSet.set(nextStateKey, nextState);
        pointer = Math.min(pointer, nextState.fScore);
        openHeap[nextState.fScore].push(nextState);

        if (previousState) {
          const bucket = openHeap[previousState.fScore];
          const i = bucket.findIndex((state) => state === previousState);
          bucket.splice(i, 1);
        }
      }
    }
  }
};

export function part1(input: string): number {
  const startingState = State.from(input);
  return minimumEnergy(startingState, 50_000);
}

export function part2(input: string): number {
  const rows = input.split("\n");
  rows.splice(3, 0, "  #D#C#B#A#  ", "  #D#B#A#C#  ");
  const startingState = State.from(rows.join("\n"));
  return minimumEnergy(startingState, 100_000);
}
