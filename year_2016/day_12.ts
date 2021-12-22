const execute = (input: string, registers: Record<string, number>) => {
  const instructions = input.split("\n")
    .map((line): [string, string | number, string | number] => {
      const [operation, ...operands] = line.split(" ");
      const [x, y] = operands.map((d) => /\d/.test(d) ? +d : d);
      return [operation, x, y];
    });

  const valueOf = (x: string | number) => {
    return typeof x === "string" ? registers[x] : x;
  };

  let pointer = 0;
  while (pointer < instructions.length) {
    const [operation, x, y] = instructions[pointer];
    switch (operation) {
      case "cpy":
        registers[y] = valueOf(x);
        pointer++;
        break;
      case "inc":
        registers[x]++;
        pointer++;
        break;
      case "dec":
        registers[x]--;
        pointer++;
        break;
      case "jnz":
        pointer += valueOf(x) ? valueOf(y) : 1;
        break;
    }
  }

  return registers.a;
};

export function part1(input: string): number {
  return execute(input, {});
}

export function part2(input: string): number {
  return execute(input, { c: 1 });
}
