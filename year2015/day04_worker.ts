/// <reference lib="deno.worker" />

import { Md5 } from "https://deno.land/std@0.109.0/hash/md5.ts";

export type MessageData = {
  data: string;
  start: string;
  remainder: number;
  hardwareConcurrency: number;
};

onmessage = function (message: MessageEvent<MessageData>): void {
  const { data, remainder, start, hardwareConcurrency } = message.data;
  let suffix = remainder;
  while (
    !new Md5()
      .update(data + suffix)
      .toString()
      .startsWith(start)
  ) {
    suffix += hardwareConcurrency;
  }
  postMessage(suffix);
};
