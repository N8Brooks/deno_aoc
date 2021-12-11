class Instruction {
  prerequisites: string[] = [];
  operation: () => number;
  addresses: Map<string, number>;
  address: string;

  constructor(addresses: Map<string, number>, line: string) {
    this.addresses = addresses;
    const [operands, address] = line.split(" -> ");
    const [op1, op2, op3] = operands.split(" ");
    this.address = address;
    switch (op2) {
      case undefined:
        this.require(op1);
        this.operation = () => this.parse(op1);
        break;
      case "AND":
        this.require(op1, op3);
        this.operation = () => this.parse(op1) & this.parse(op3);
        break;
      case "OR":
        this.require(op1, op3);
        this.operation = () => this.parse(op1) | this.parse(op3);
        break;
      case "LSHIFT":
        this.require(op1, op3);
        this.operation = () => this.parse(op1) << this.parse(op3);
        break;
      case "RSHIFT":
        this.require(op1, op3);
        this.operation = () => this.parse(op1) >> this.parse(op3);
        break;
      default:
        this.require(op2);
        this.operation = () => ~this.parse(op2) << 16 >>> 16;
        break;
    }
  }

  require(...operands: string[]): void {
    for (const operand of operands) {
      if (/[a-z]/.test(operand)) {
        this.prerequisites.push(operand);
      }
    }
  }

  parse(operand: string): number {
    if (/\d+/.test(operand)) {
      return +operand;
    }
    const result = this.addresses.get(operand);
    if (result === undefined) {
      throw new Error(`prerequisite was not met for ${operand}`);
    }
    return result;
  }

  ready(): boolean {
    return this.prerequisites.every((operand) => this.addresses.has(operand));
  }

  operate(): void {
    this.addresses.set(this.address, this.operation());
  }
}

class Instructions {
  addresses: Map<string, number> = new Map();
  instructions: Instruction[];

  constructor(input: string) {
    this.instructions = input
      .split("\n")
      .map((line) => new Instruction(this.addresses, line));
  }

  compute(wire: string): number {
    while (true) {
      const instruction = this.instructions.shift();
      if (instruction === undefined) {
        break;
      } else if (instruction.ready()) {
        instruction.operate();
      } else {
        this.instructions.push(instruction);
      }
    }
    const result = this.addresses.get(wire);
    if (result === undefined) {
      throw Error(`value did not exist for ${wire}`);
    }
    return result;
  }

  remove(wire: string): void {
    this.instructions = this
      .instructions
      .filter(({ address }) => address !== wire);
  }
}

export function part1(input: string, wire: string): number {
  const instructions = new Instructions(input);
  return instructions.compute(wire);
}

export function part2(input: string): number {
  const instructions = new Instructions(input);
  const line = `${part1(input, "a")} -> b`;
  const { addresses } = instructions;
  const instruction = new Instruction(addresses, line);
  instructions.remove("b");
  instructions.instructions.push(instruction);
  return instructions.compute("a");
}
