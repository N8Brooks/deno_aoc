const pool = "abcdefghjkmnpqrstuvwxyz";
const charCodes = pool.split("").map((char) => char.charCodeAt(0));

export function part1(input: string): string {
  const indices = input.split("").map((char) => pool.indexOf(char));
  while (true) {
    loop: {
      for (let i = indices.length - 1; i >= 0; i--) {
        if (indices[i] === pool.length - 1) {
          continue;
        }
        indices[i]++;
        indices.fill(0, i + 1);
        if (hasDouble() && hasAscending()) {
          return indices.map((i) => pool[i]).join("");
        } else {
          break loop;
        }
      }
      indices.fill(0);
      indices.push(0);
    }
  }

  function hasDouble(): boolean {
    const doubles: Set<number> = new Set();
    let a = NaN;
    for (const b of indices) {
      if (a === b && doubles.add(b).size >= 2) {
        return true;
      } else {
        a = b;
      }
    }
    return false;
  }

  function hasAscending(): boolean {
    let a = NaN, b = NaN;
    for (const i of indices) {
      const c = charCodes[i];
      if (a + 1 === b && b + 1 === c) {
        return true;
      } else {
        [a, b] = [b, c];
      }
    }
    return false;
  }
}

export function part2(input: string): string {
  return part1(part1(input));
}
