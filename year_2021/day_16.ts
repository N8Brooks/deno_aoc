export function part1(input: string): number {
  const binary = BigInt(`0x${input}`)
    .toString(2)
    .padStart(4 * input.length, "0");
  let i = 0, versionNumberSum = 0;
  while (i < binary.length) {
    versionNumberSum += parseInt(binary.substr(i, 3), 2);
    const typeId = parseInt(binary.substr(i + 3, 3), 2);
    i += 6
    if (typeId === 4) {
      while (binary[i] !== "0") {
        i += 5;
      }
      i += 5;
    } else {
      i += +binary[i] ? 12 : 16;
    }
  }
  return versionNumberSum;
}

function* evaluate(binary: string, i: number): Generator<[number, number]> {
  while (i < binary.length) {
    const typeId = parseInt(binary.substr(i + 3, 3), 2);
    if (typeId === 4) {
      let j = i += 6;
      while (binary[j] !== "0") {
        j += 5;
      }
      j += 5;
      yield [parseInt(binary.substr(i, j - i), 2), i = j];
      continue;
    }

    const nums: number[] = [];
    let x: number;
    if (+binary[i + 6]) {
      const length = parseInt(binary.substr(i + 7, 11), 2);
      const it = evaluate(binary, i + 18);
      for (let n = 0; n < length; n++) {
        [x, i] = it.next().value;
        nums.push(x);
      }
    } else {
      const j = i + parseInt(binary.substr(i + 7, 15), 2) + 22;
      const it = evaluate(binary, i + 22);
      while (i < j) {
        [x, i] = it.next().value;
        nums.push(x);
      }
    }

    switch (typeId) {
      case 0:
        yield [nums.reduce((a, b) => a + b, 0), i];
        break;
      case 1:
        yield [nums.reduce((a, b) => a * b, 1), i];
        break;
      case 2:
        yield [Math.min(...nums), i];
        break;
      case 3:
        yield [Math.max(...nums), i];
        break;
      case 5:
        yield [+(nums[0] > nums[1]), i];
        break;
      case 6:
        yield [+(nums[0] < nums[1]), i];
        break;
      case 7:
        yield [+(nums[0] === nums[1]), i];
        break;
    }
  }
}

export function part2(input: string): number {
  const binary = BigInt(`0x${input}`)
    .toString(2)
    .padStart(4 * input.length, "0");
  return evaluate(binary, 0).next().value[0];
}
