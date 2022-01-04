/** Hex to byte conversion table */
const BYTE_TO_HEX = Array.from(
  { length: 0x100 },
  (_, i) => i.toString(16).padStart(2, "0"),
);

/** Returns a hex string from a hash buffer */
export const decode = (hashBuffer: ArrayBuffer): string => {
  const hashArray = new Uint8Array(hashBuffer);
  const hexOctets = new Array(hashArray.length);
  for (let i = 0; i < hashArray.length; i++) {
    const byte = hashArray[i];
    hexOctets[i] = BYTE_TO_HEX[byte];
  }
  return hexOctets.join("");
};

/** Modular power */
export const pow = (base: number, exp: number, mod: number): number => {
  let res = 1;
  while (exp > 0) {
    [base, exp, res] = [
      base * base % mod,
      Math.floor(exp / 2),
      exp & 1 ? base * res % mod : res,
    ];
  }
  return res;
};

/** Szudzik's pairing function */
export const pair = (x: number, y: number) => {
  const unSignedX = x < 0 ? -2 * x - 1 : 2 * x;
  const unSignedY = y < 0 ? -2 * y - 1 : 2 * y;
  return unSignedY > unSignedX
    ? unSignedY * unSignedY + unSignedX
    : unSignedX * unSignedX + unSignedX + unSignedY;
};

/** Inverse Szudzik's pairing function */
export const unPair = (z: number): [number, number] => {
  const intSquareRoot = ~~(z ** 0.5);
  const perfectSquare = intSquareRoot * intSquareRoot;
  const [ux, uy] = intSquareRoot > z - perfectSquare
    ? [z - perfectSquare, intSquareRoot]
    : [intSquareRoot, z - perfectSquare - intSquareRoot];
  return [
    ux & 1 ? (ux + 1) / -2 : ux / 2,
    uy & 1 ? (uy + 1) / -2 : uy / 2,
  ];
};

/** Returns `x` such that `a * x` is congruent to 1 mod `b` */
export const modularInverse = (a: number, b: number): number => {
  const b0 = b;
  let [x0, x1] = [0, 1];
  if (b === 1) {
    return 1;
  }
  while (a > 1) {
    const q = Math.floor(a / b);
    [a, b] = [b, a % b];
    [x0, x1] = [x1 - q * x0, x0];
  }
  if (x1 < 0) {
    x1 += b0;
  }
  return x1;
};

export function multiplyComplex(
  [aReal, aImag]: [number, number],
  [bReal, bImag]: [number, number],
): [number, number] {
  return [aReal * bReal - aImag * bImag, aReal * bImag + aImag * bReal];
}

/** Chinese remainder theorem */
export const crt = (dividends: number[], remainders: number[]): number => {
  let sum = 0;
  const prod = dividends.reduce((a, c) => a * c, 1);
  for (let i = 0; i < dividends.length; i++) {
    const dividend = dividends[i];
    const remainder = remainders[i];
    const p = Math.floor(prod / dividend);
    sum += remainder * p * modularInverse(p, dividend);
  }
  return (sum % prod + prod) % prod;
};

/** Sum of `1`s in a 32-bit binary number */
export const bitCount = (n: number): number => {
  n = n - ((n >> 1) & 0x55555555);
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
  return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24;
};
