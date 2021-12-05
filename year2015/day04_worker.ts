/// <reference lib="deno.worker" />

import { Md5 } from "../deps.ts";

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
