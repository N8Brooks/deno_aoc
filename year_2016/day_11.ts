import { combinations } from "../deps.ts";

type Element = { generator: number; microchip: number };

class State {
  /** The floor of each generator and microchip pair */
  elements: Element[];

  /** The floor the elevator is currently at */
  elevator: number;

  /** Steps taken to achieve this state */
  steps: number;

  constructor(
    elements: Element[],
    elevator: number,
    steps: number,
  ) {
    this.elements = elements;
    this.elevator = elevator;
    this.steps = steps;
  }

  /** Returns starting `State` from problem `input` */
  static from(input: string): State {
    const elements: Record<string, Element> = {};
    input.split("\n").forEach((line, floor) => {
      for (const [, element] of line.matchAll(/(\w+) generator/g)) {
        elements[element] ??= { generator: NaN, microchip: NaN };
        elements[element].generator = floor;
      }
      for (const [, element] of line.matchAll(/(\w+)-compatible microchip/g)) {
        elements[element] ??= { generator: NaN, microchip: NaN };
        elements[element].microchip = floor;
      }
    });
    return new State(Object.values(elements), 0, 0);
  }

  /** Returns whether this `State` does not fry any chips */
  isValid(): boolean {
    const unsafeElements = this.elements
      .filter((element) => element.generator !== element.microchip);
    const floorsWithGenerators = this.elements
      .map(({ generator }) => generator);
    const floorsWithMicrochips = unsafeElements
      .map(({ microchip }) => microchip);
    return !floorsWithMicrochips
      .some((floor) => floorsWithGenerators.includes(floor));
  }

  /** Returns whether all elements are on the 4th floor */
  isSuccessful(): boolean {
    return this.elements
      .every((element) => element.generator === 3 && element.microchip === 3);
  }

  /** Yields states that are one step away from this state */
  *[Symbol.iterator](): Generator<State> {
    // Generators that are possible to carry
    const generators = this.elements
      .map(({ generator }, i) => [generator, i])
      .filter(([floor]) => this.elevator === floor)
      .map(([, i]): ["generator", number] => ["generator", i]);
    // Microchips that are possible to carry
    const microchips = this.elements
      .map(({ microchip }, i) => [microchip, i])
      .filter(([floor]) => this.elevator === floor)
      .map(([, i]): ["microchip", number] => ["microchip", i]);
    // All possible carries
    const carries = [
      ...generators.map((carry) => [carry]),
      ...microchips.map((carry) => [carry]),
      ...combinations([...generators, ...microchips], 2),
    ];
    // Move elevator down 1 if it's above 0
    if (this.elevator > 0) {
      for (const carry of carries) {
        const state = new State(
          this.elements.map((element) => ({ ...element })),
          this.elevator - 1,
          this.steps + 1,
        );
        for (const [type, i] of carry) {
          state.elements[i][type] = this.elevator - 1;
        }
        if (state.isValid()) {
          yield state;
        }
      }
    }
    // Move elevator up 1 if it's below 3
    if (this.elevator < 3) {
      for (const carry of carries) {
        const state = new State(
          this.elements.map((element) => ({ ...element })),
          this.elevator + 1,
          this.steps + 1,
        );
        for (const [type, i] of carry) {
          state.elements[i][type] = this.elevator + 1;
        }
        if (state.isValid()) {
          yield state;
        }
      }
    }
  }

  /** Key for `State` where elements are interchangeable */
  toString(): string {
    const microchips = [0, 0, 0, 0];
    const generators = [0, 0, 0, 0];
    for (const element of this.elements) {
      microchips[element.microchip]++;
      generators[element.generator]++;
    }
    return `${this.elevator};${microchips};${generators}`;
  }
}

const minimumSteps = (startingState: State): number => {
  const queue = [startingState];
  const seen: Set<string> = new Set();
  let state: State;
  do {
    state = queue.shift()!;
    const key = state.toString();
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    queue.push(...state);
  } while (!state.isSuccessful());
  return state.steps;
};

export function part1(input: string): number {
  const startingState = State.from(input);
  return minimumSteps(startingState);
}

export function part2(input: string): number {
  const startingState = State.from(input);
  startingState.elements.push(
    { generator: 0, microchip: 0 }, // Elerium
    { generator: 0, microchip: 0 }, // Dilithium
  );
  return minimumSteps(startingState);
}
