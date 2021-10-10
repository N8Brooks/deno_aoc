import { Md5 } from "https://deno.land/std@0.109.0/hash/md5.ts";

export type MessageData = {
  prefix: string;
  start: string;
  remainder: number;
  hardwareConcurrency: number;
};

onmessage = function (message: MessageEvent<MessageData>): void {
  const { prefix, remainder, start, hardwareConcurrency } = message.data;
  let suffix = remainder;
  while (
    !new Md5()
      .update(prefix + suffix)
      .toString()
      .startsWith(start)
  ) {
    suffix += hardwareConcurrency;
  }
  postMessage(suffix);
};
