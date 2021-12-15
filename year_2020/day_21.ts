const mapAllergensToIngredients = (input: string): Map<string, Set<string>> => {
  const allergensToIngredients: Map<string, Set<string>> = new Map();
  for (const line of input.split("\n")) {
    const [, ingredientList, allergenList] = line.match(
      /([a-z ]*) \(contains ([a-z, ]+)\)/,
    )!;
    const identities = new Set(ingredientList.split(" "));
    for (const allergen of allergenList.split(", ")) {
      const ingredients = allergensToIngredients.get(allergen);
      if (ingredients) {
        for (const ingredient of ingredients) {
          if (!identities.has(ingredient)) {
            ingredients.delete(ingredient);
          }
        }
      } else {
        allergensToIngredients.set(allergen, new Set(identities));
      }
    }
  }
  return allergensToIngredients;
};

export function part1(input: string): number {
  const allergens = new Set(
    [...mapAllergensToIngredients(input).values()]
      .map((identities) => [...identities])
      .flat(),
  );
  let nonAllergenCount = 0;
  for (const line of input.split("\n")) {
    const ingredients = line.substr(0, line.indexOf(" (")).split(" ");
    for (const ingredient of ingredients) {
      if (!allergens.has(ingredient)) {
        nonAllergenCount++;
      }
    }
  }
  return nonAllergenCount;
}

export function part2(input: string): string {
  const allergensToIngredients = [...mapAllergensToIngredients(input)];
  const allergenIdentities: [string, string][] = [];
  while (allergensToIngredients.length) {
    const i = allergensToIngredients.findIndex(([, { size }]) => size === 1)!;
    const [[allergen, ingredients]] = allergensToIngredients.splice(i, 1);
    const [ingredient] = [...ingredients];
    allergenIdentities.push([allergen, ingredient]);
    allergensToIngredients.forEach(([, ingredients]) =>
      ingredients.delete(ingredient)
    );
  }
  return allergenIdentities
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, ingredient]) => ingredient)
    .join();
}
