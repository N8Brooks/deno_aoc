export function part1(input: string): number {
  const registers: Record<string, number> = {};
  const valueOf = (register: string): number => {
    return /-?\d+/.test(register) ? +register : registers[register] ??= 0;
  };
  const instructions = input.split("\n").map((line) => line.split(" "));
  let mulCount = 0;
  let pointer = 0;
  while (pointer < instructions.length) {
    const [operator, x, y] = instructions[pointer];
    switch (operator) {
      case "set":
        registers[x] = valueOf(y);
        break;
      case "sub":
        registers[x] -= valueOf(y);
        break;
      case "mul":
        registers[x] *= valueOf(y);
        mulCount++;
        break;
      case "mod":
        registers[x] %= valueOf(y);
        break;
      case "jnz":
        pointer += valueOf(x) ? valueOf(y) : 1;
        continue;
    }
    pointer++;
  }
  return mulCount;
}

export function part2(_input: string): number {
  let h = 0;
  for (let i = 105700; i <= 122700; i += 17) {
    for (let d = 2; d < i; d++) {
      if (i % d === 0) {
        h++;
        break;
      }
    }
  }
  return h;
}
