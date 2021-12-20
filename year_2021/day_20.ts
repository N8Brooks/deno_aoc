const enhanceImage = (input: string, n: number): number => {
  const [algorithmInput, imageInput] = input.split("\n\n");
  const algorithm = algorithmInput.split("").map((char) =>
    char === "#" ? 1 : 0
  );
  const bounds = imageInput.indexOf("\n") + 4 * n;
  let previousImage = Array.from(
    { length: bounds },
    () => Array(bounds).fill(0),
  );
  imageInput
    .split("\n")
    .forEach((imageRow, y) => {
      for (let x = 0; x < imageRow.length; x++) {
        if (imageRow[x] === "#") {
          previousImage[y + 2 * n][x + 2 * n] = 1;
        }
      }
    });

  for (let i = 0; i < n; i++) {
    const currentImage = Array.from(
      { length: bounds },
      () => Array(bounds).fill(0),
    );
    for (let y = 1; y < bounds - 1; y++) {
      for (let x = 1; x < bounds - 1; x++) {
        const num = 256 * previousImage[y - 1][x - 1] +
          128 * previousImage[y - 1][x] +
          64 * previousImage[y - 1][x + 1] +
          32 * previousImage[y][x - 1] +
          16 * previousImage[y][x] +
          8 * previousImage[y][x + 1] +
          4 * previousImage[y + 1][x - 1] +
          2 * previousImage[y + 1][x] +
          previousImage[y + 1][x + 1];

        currentImage[y][x] = algorithm[num];
      }
    }
    previousImage = currentImage;
  }

  let count = 0;
  for (let y = n; y < bounds - n; y++) {
    for (let x = n; x < bounds - n; x++) {
      if (previousImage[y][x]) {
        count++;
      }
    }
  }

  return count;
};

export function part1(input: string): number {
  return enhanceImage(input, 2);
}

export function part2(input: string): number {
  return enhanceImage(input, 50);
}
