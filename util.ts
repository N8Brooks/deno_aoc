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
