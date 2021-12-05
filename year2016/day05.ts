import { crypto } from "../deps.ts";
import { decode } from "../util.ts";

const textEncoder = new TextEncoder();

export async function part1(input: string): Promise<string> {
  let index = 0;
  const password: string[] = [];
  while (password.length < 8) {
    const data = textEncoder.encode(input + index++);
    const hashBuffer = await crypto.subtle.digest("MD5", data);
    const hash = decode(hashBuffer);
    if (hash.startsWith("00000")) {
      password.push(hash[5]);
    }
  }
  return password.join("");
}

export async function part2(input: string): Promise<string> {
  let count = 0;
  let index = 0;
  const password: string[] = Array(8);
  while (count < 8) {
    const data = textEncoder.encode(input + index++);
    const hashBuffer = await crypto.subtle.digest("MD5", data);
    const hash = decode(hashBuffer);
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
