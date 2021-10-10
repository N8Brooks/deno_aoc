const { hardwareConcurrency } = navigator;

export function part1(data: string): Promise<number> {
  return process(data, "00000");
}

export function part2(data: string): Promise<number> {
  return process(data, "000000");
}

/** Flakey way to parallelize hashing. */
async function process(data: string, start: string): Promise<number> {
  const prefix = data.trimEnd();
  const { href } = new URL("./day04_worker.ts", import.meta.url);
  const workers = Array.from(
    { length: hardwareConcurrency },
    () => new Worker(href, { type: "module" }),
  );
  const promises = workers.map((worker): Promise<number> => {
    return new Promise((resolve, reject) => {
      worker.onmessage = (message) => resolve(message.data);
      worker.onerror = (error) => reject(error);
    });
  });
  workers.forEach((worker, remainder) => {
    worker.postMessage({
      prefix,
      start,
      remainder,
      hardwareConcurrency,
    });
  });
  const suffix = await Promise.race(promises);
  workers.forEach((worker) => worker.terminate());
  return suffix;
}
