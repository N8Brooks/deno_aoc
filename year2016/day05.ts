import { Md5 } from "../deps.ts";

export function part1(input: string): string {
  let index = 0;
  const password: string[] = [];
  while (password.length < 8) {
    const hash = new Md5()
      .update(input + index++)
      .toString();
    if (hash.startsWith("00000")) {
      password.push(hash[5]);
    }
  }
  return password.join("");
}

export function part2(input: string): string {
  let count = 0;
  let index = 0;
  const password: string[] = Array(8);
  while (count < 8) {
    const hash = new Md5()
      .update(input + index++)
      .toString();
    if (!hash.startsWith("00000")) {
      continue;
    }
    const p = +hash[5];
    if (!isNaN(p) && p < 8 && password[p] === undefined) {
      password[p] = hash[6];
      count++;
    }
  }
  return password.join("");
}
