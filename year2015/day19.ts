export function part1(input: string): number {
  const [replacements, molecule] = input.split("\n\n");
  const distinctMolecules: Set<string> = new Set();
  for (const replacement of replacements.split("\n")) {
    const [from, to] = replacement.split(" => ");
    for (const match of molecule.matchAll(new RegExp(from, "g"))) {
      const i = match.index as number;
      const prefix = molecule.substr(0, i);
      const suffix = molecule.substr(i + from.length);
      distinctMolecules.add(`${prefix}${to}${suffix}`);
    }
  }
  return distinctMolecules.size;
}

export function part2(input: string): number {
  const [replacementsInput, targetMolecule] = input.split("\n\n");
  const replacements = replacementsInput
    .split("\n")
    .map((replacement) => replacement.split(" => "));
  let currentMolecule = targetMolecule;
  let stepCount = 0;
  do {
    loop: {
      for (const [from, to] of replacements) {
        if (!currentMolecule.includes(to)) {
          continue;
        }
        currentMolecule = currentMolecule.replace(to, from);
        stepCount++;
        break loop;
      }
      replacements.sort(() => Math.random() - 0.5);
      currentMolecule = targetMolecule;
      stepCount = 0;
    }
  } while (currentMolecule !== "e");
  return stepCount;
}
