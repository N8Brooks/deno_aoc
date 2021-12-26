import { zip } from "../deps.ts";

const DRAGON_WIDTH = 19;

const DRAGON_HEIGHT = 2;

const DRAGON_DELTAS = [
  [1, 2],
  [19, 1],
  [14, 1],
  [13, 1],
  [8, 1],
  [7, 1],
  [2, 1],
  [1, 1],
  [0, 1],
  [18, 0],
  [15, 0],
  [12, 0],
  [9, 0],
  [6, 0],
  [3, 0],
];

class Tile {
  constructor(public rows: string[], public id: number) {}

  static from(input: string): Tile {
    const [id, ...rows] = input.split("\n");
    return new Tile(rows, +id.substring(5, 9));
  }

  *sides(): Generator<string> {
    yield this.top;
    yield this.right;
    yield this.bottom;
    yield this.left;
    yield this.top.split("").reverse().join("");
    yield this.right.split("").reverse().join("");
    yield this.bottom.split("").reverse().join("");
    yield this.left.split("").reverse().join("");
  }

  get top(): string {
    return this.rows[0];
  }

  get right(): string {
    return this.rows.map((side) => side[9]).join("");
  }

  get bottom(): string {
    return this.rows[9];
  }

  get left(): string {
    return this.rows.map((side) => side[0]).join("");
  }

  get inside(): string[] {
    return this.rows.slice(1, 9).map((row) => row.substring(1, 9));
  }

  rotate(): this {
    this.rows = this.rows.map((_, y, { length }) =>
      this.rows.map((_, x) => this.rows[length - x - 1][y]).join("")
    );
    return this;
  }

  flip(): this {
    this.rows.reverse();
    return this;
  }

  *[Symbol.iterator](): Generator<this> {
    yield this;
    yield this.rotate();
    yield this.rotate();
    yield this.rotate();
    yield this.flip();
    yield this.rotate();
    yield this.rotate();
    yield this.rotate();
  }
}

/** Inverse Szudzik's pairing function */
const unPair = (z: number): [number, number] => {
  const intSquareRoot = ~~(z ** 0.5);
  const perfectSquare = intSquareRoot * intSquareRoot;
  return intSquareRoot > z - perfectSquare
    ? [z - perfectSquare, intSquareRoot]
    : [intSquareRoot, z - perfectSquare - intSquareRoot];
};

export function part1(input: string): number {
  const tiles = input.split("\n\n").map((input) => Tile.from(input));
  const sidesToIds: Record<string, number[]> = {};
  for (const tile of tiles) {
    for (const side of tile.sides()) {
      const ids = sidesToIds[side] ??= [];
      ids.push(tile.id);
    }
  }
  const uniqueSideCounts = Object.fromEntries(tiles.map(({ id }) => [id, 0]));
  Object.values(sidesToIds)
    .filter((ids) => ids.length === 1)
    .forEach(([id]) => {
      uniqueSideCounts[id]++;
    });
  return Object.entries(uniqueSideCounts)
    .filter(([, count]) => count === 4)
    .map(([id]) => +id)
    .reduce((a, b) => a * b);
}

export function part2(input: string): number {
  // Find side counts
  const tilesArr = input
    .split("\n\n")
    .map((input) => Tile.from(input));
  const tilesObj: Record<number, Tile> = Object.fromEntries(
    tilesArr.map((tile) => [tile.id, tile]),
  );
  const length = tilesArr.length ** 0.5;
  const sidesToIds: Record<string, number[]> = {};
  for (const tile of tilesArr) {
    for (const side of tile.sides()) {
      const ids = sidesToIds[side] ??= [];
      ids.push(tile.id);
    }
  }

  // Find unique sides
  const uniqueSideCounts = Object.fromEntries(
    tilesArr.map(({ id }) => [id, 0]),
  );
  Object.values(sidesToIds)
    .filter((ids) => ids.length === 1)
    .forEach(([id]) => {
      uniqueSideCounts[id]++;
    });

  // Find corner
  const cornerId = +Object.entries(uniqueSideCounts).find(([, count]) =>
    count === 4
  )![0];
  const cornerTile = tilesObj[cornerId];

  // Orient corner
  while (
    sidesToIds[cornerTile.left].length !== 1 ||
    sidesToIds[cornerTile.top].length !== 1
  ) {
    cornerTile.rotate();
  }

  // Set up board and corner tile
  const board: Tile[][] = Array.from({ length }, () => Array(length));
  board[0][0] = cornerTile;

  // Stich board together from corner tile
  for (let i = 1; i < tilesArr.length; i++) {
    const [x, y] = unPair(i);
    let tile: Tile;

    if (x > 0) {
      const leftTile = board[y][x - 1];
      const leftSide = leftTile.right;
      const targetId = sidesToIds[leftSide].find((id) => id !== leftTile.id);
      tile = tilesObj[targetId!];
      for (const translatedTile of tile) {
        if (translatedTile.left === leftSide) {
          break;
        }
      }
    } else {
      const topTile = board[y - 1][x];
      const topSide = topTile.bottom;
      const targetId = sidesToIds[topSide].find((id) => id !== topTile.id);
      tile = tilesObj[targetId!];
      for (const translatedTile of tile) {
        if (translatedTile.top === topSide) {
          break;
        }
      }
    }
    board[y][x] = tile;
  }

  // The inside of each tile joined
  const worldTile = new Tile(
    board.map((tileRow) =>
      zip(...tileRow.map(({ inside }) => inside)).map((row) => row.join(""))
    ).flat(),
    0,
  );

  // Count of all hashtags
  const roughness = worldTile.rows.reduce(
    (sum, water) => sum + [...water.matchAll(/#/g)].length,
    0,
  );

  // Return roughness once found
  for (const { rows } of worldTile) {
    let count = 0;
    for (let y = DRAGON_HEIGHT; y < rows.length; y++) {
      for (let x = DRAGON_WIDTH; x < rows[0].length; x++) {
        if (DRAGON_DELTAS.every(([xd, yd]) => rows[y - yd][x - xd] === "#")) {
          count++;
        }
      }
    }
    if (count) {
      return roughness - count * DRAGON_DELTAS.length;
    }
  }

  throw Error("No water monsters found");
}
