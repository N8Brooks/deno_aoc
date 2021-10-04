import { Md5 } from "https://deno.land/std@0.109.0/hash/md5.ts";

export function part1(data: string): number {
  return process(data, "00000");
}

export function part2(data: string): number {
  return process(data, "000000");
}

function process(data: string, start: string) {
  const prefix = data.trimEnd();
  let suffix = 1;
  while (
    !new Md5().update(prefix)
      .update(suffix + "")
      .toString()
      .startsWith(start)
  ) {
    suffix++;
  }
  return suffix;
}
