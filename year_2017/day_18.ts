/** Represents a program from the problem which may be paused */
class Program {
  /** Keeps track of how many values have been sent */
  private _sndCount = 0;

  /** Index of the current instruction */
  private pointer = 0;

  constructor(
    /** Pre-parsed program instructions */
    private instructions: string[][],
    /** Given registers which potentially contain initial values */
    private registers: Record<string, number>,
  ) {}

  /** Runs the program with the given received value queue */
  run(rcvQueue: number[]): number[] {
    const sndQueue: number[] = [];
    const valueOf = (register: string): number => {
      return /-?\d+/.test(register)
        ? +register
        : this.registers[register] ??= 0;
    };
    loop: {
      while (this.pointer < this.instructions.length) {
        const [operator, register, operand] = this.instructions[this.pointer];
        switch (operator) {
          case "snd":
            sndQueue.push(valueOf(register));
            break;
          case "rcv":
            if (!rcvQueue.length) {
              break loop;
            }
            this.registers[register] = rcvQueue.shift()!;
            break;
          case "set":
            this.registers[register] = valueOf(operand);
            break;
          case "add":
            this.registers[register] += valueOf(operand);
            break;
          case "mul":
            this.registers[register] *= valueOf(operand);
            break;
          case "mod":
            this.registers[register] %= valueOf(operand);
            break;
          case "jgz":
            this.pointer += valueOf(register) > 0 ? valueOf(operand) : 1;
            continue;
        }
        this.pointer++;
      }
    }
    this._sndCount += sndQueue.length;
    return sndQueue;
  }

  /** Returns `_sndCount` so that it is read-only */
  get sndCount(): number {
    return this._sndCount;
  }
}

export function part1(input: string): number {
  const instructions = input.split("\n").map((line) => line.split(" "));
  const program = new Program(instructions, {});
  const rcvQueue = program.run([]);
  return rcvQueue.at(-1)!;
}
export function part2(input: string): number {
  const instructions = input.split("\n").map((line) => line.split(" "));
  const program0 = new Program(instructions, { p: 0 });
  const program1 = new Program(instructions, { p: 1 });
  let [sndQueue0, sndQueue1]: number[][] = [[], []];
  do {
    [sndQueue0, sndQueue1] = [program0.run(sndQueue1), program1.run(sndQueue0)];
  } while (sndQueue0.length || sndQueue1.length);
  return program1.sndCount;
}
