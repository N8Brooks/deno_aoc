import { decode } from "../util.ts";
import { crypto } from "../deps.ts";

const textEncoder = new TextEncoder();

/** Returns the `nonce` of the `hash` that begins with `prefix` */
const mine = async (input: string, prefix: string): Promise<number> => {
  let nonce = -1;
  let hash: string;
  do {
    const data = textEncoder.encode(input + ++nonce);
    const hashBuffer = await crypto.subtle.digest("MD5", data);
    hash = decode(hashBuffer);
  } while (!hash.startsWith(prefix));
  return nonce;
};

export function part1(input: string): Promise<number> {
  return mine(input, "00000");
}

export function part2(input: string): Promise<number> {
  return mine(input, "000000");
}
