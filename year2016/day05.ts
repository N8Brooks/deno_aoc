import { Md5 } from "https://deno.land/std@0.109.0/hash/md5.ts";

export function part1(data: string): string {
  let index = 0;
  const password: string[] = [];
  while (password.length < 8) {
    const hash = new Md5()
      .update(data + index++)
      .toString();
    if (hash.startsWith("00000")) {
      password.push(hash[5]);
    }
  }
  return password.join("");
}

export function part2(data: string): string {
  let count = 0;
  let index = 0;
  const password: string[] = Array(8);
  while (count < 8) {
    const hash = new Md5()
      .update(data + index++)
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
