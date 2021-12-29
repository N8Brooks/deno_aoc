import { permutations } from "../deps.ts";

export function evaluate(instruction: string, password: string[]): string[] {
  let match: RegExpMatchArray | null;

  match = instruction.match(/swap position (\d+) with position (\d+)/);
  if (match) {
    const x = +match[1], y = +match[2];
    [password[x], password[y]] = [password[y], password[x]];
    return password;
  }

  match = instruction.match(/swap letter (\w) with letter (\w)/);
  if (match) {
    const x = password.indexOf(match[1]);
    const y = password.indexOf(match[2]);
    [password[x], password[y]] = [password[y], password[x]];
    return password;
  }

  match = instruction.match(/rotate (left|right) (\d+) step/);
  if (match) {
    const direction = match[1];
    const steps = direction === "left" ? -match[2] : +match[2];
    for (let i = 0; i < steps; i++) {
      password.unshift(password.pop()!);
    }
    for (let i = 0; i > steps; i--) {
      password.push(password.shift()!);
    }
    return password;
  }

  match = instruction.match(/rotate based on position of letter (\w)/);
  if (match) {
    const index = password.indexOf(match[1]);
    const rotations = 1 + index + +(index >= 4);
    for (let i = 0; i < rotations; i++) {
      password.unshift(password.pop()!);
    }
    return password;
  }

  match = instruction.match(/reverse positions (\d+) through (\d+)/);
  if (match) {
    const x = +match[1], y = +match[2] + 1;
    password.splice(x, 0, ...password.splice(x, y - x).reverse());
    return password;
  }

  match = instruction.match(/move position (\d+) to position (\d+)/);
  if (match) {
    const x = +match[1], y = +match[2];
    password.splice(y, 0, password.splice(x, 1)[0]);
    return password;
  }

  throw Error(`Unrecognized instruction: ${instruction}`);
}

export function scramble(input: string, password: string[]): string {
  return input
    .split("\n")
    .reduce(
      (password, instruction) => evaluate(instruction, password),
      password,
    )
    .join("");
}

export function part1(input: string): string {
  return scramble(input, "abcdefgh".split(""));
}

export function part2(input: string): string {
  return [...permutations("gahedfcb".split(""))]
    .find((password) => scramble(input, [...password]) === "fbgdceah")!
    .join("");
}
