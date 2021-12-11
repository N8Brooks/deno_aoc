/** Represents a current state of the boot code program */
interface BootCodeState {
  /** The current instruction index of the boot code */
  index: number;

  /** The global value for the boot code program */
  accumulator: number;
}

/** Data and functionality associated with an instruction */
abstract class Instruction {
  /** Applies operation to `state` as a side effect */
  abstract operate(state: BootCodeState): void;

  constructor(protected argument: number) {}

  /** Factory that returns concrete `Instruction` instance */
  static from(line: string): Instruction {
    const [operation, argument] = line.split(" ");
    switch (operation) {
      case "acc":
        return new AccInstruction(+argument);
      case "jmp":
        return new JmpInstruction(+argument, false);
      case "nop":
        return new JmpInstruction(+argument, true);
      default:
        throw new Error(`${operation} is not a valid operation`);
    }
  }

  /** Whether this instruction can be changed for `part2` */
  isChangeable(): boolean {
    return false;
  }

  /** Maybe this could be an interface... */
  change(): void {
    throw new Error("This instruction is not changeable");
  }
}

/** For the `"acc"` operation */
class AccInstruction extends Instruction {
  operate(state: BootCodeState): void {
    state.index++;
    state.accumulator += this.argument;
  }
}

/** For the `"jmp"` and `"nop"` operation */
class JmpInstruction extends Instruction {
  /** Whether this should execute a `"nop"` instead of a `"jmp"` */
  #nop: boolean;

  constructor(argument: number, nop: boolean) {
    super(argument);
    this.#nop = nop;
  }

  operate(state: BootCodeState): void {
    if (this.#nop) {
      state.index++;
    } else {
      state.index += this.argument;
    }
  }

  /** `"nop"` to a `"jmp"` instructions are changeable */
  isChangeable() {
    return true;
  }

  /** Swap this from a `"nop"` to a `"jmp"` or vice versa */
  change(): void {
    this.#nop = !this.#nop;
  }
}

/** Parses `input` as `Instruction[]` */
const parseInput = (input: string): Instruction[] => {
  return input.split("\n").map((line) => Instruction.from(line));
};

/** Runs boot code and returns state upon loop or termination */
const runBootCode = (instructions: Instruction[]): BootCodeState => {
  const operatedIndices: Set<number> = new Set();
  const state: BootCodeState = { index: 0, accumulator: 0 };
  while (
    state.index < instructions.length && !operatedIndices.has(state.index)
  ) {
    operatedIndices.add(state.index);
    const instruction = instructions[state.index];
    instruction.operate(state);
  }
  return state;
};

export function part1(input: string): number {
  const instructions = parseInput(input);
  const { accumulator } = runBootCode(instructions);
  return accumulator;
}

export function part2(input: string): number {
  const instructions = parseInput(input);
  for (const instruction of instructions) {
    if (!instruction.isChangeable()) {
      continue;
    }
    instruction.change();
    const state = runBootCode(instructions);
    if (state.index >= instructions.length) {
      return state.accumulator;
    }
    instruction.change();
  }
  throw new Error("No corrupted instruction found");
}
