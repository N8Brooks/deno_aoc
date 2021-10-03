import { Md5 } from "https://deno.land/std@0.109.0/hash/md5.ts";

export function part1(text: string): number {
  return process(text, "00000");
}

export function part2(text: string): number {
  return process(text, "000000");
}

function process(text: string, start: string) {
  text = text.trimEnd();
  let i = 1;
  while (
    !new Md5().update(text)
      .update(i + "")
      .toString()
      .startsWith(start)
  ) {
    i++;
  }
  return i;
}
