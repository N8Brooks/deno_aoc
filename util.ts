/** Hex to byte conversion table */
const BYTE_TO_HEX = Array.from(
  { length: 0xff },
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
