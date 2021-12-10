const TOKEN = /[A-Z][a-z]?/g;

const REPLACE_1 = /e => [A-Z]$/gm;

const REPLACE_4 = /[A-Z][a-z]?Rn[A-Z][a-z]?Ar/g;

const REPLACE_6 = /[A-Z][a-z]?Rn[A-Z][a-z]?Y[A-Z][a-z]?Ar/g;

const REPLACE_8 = /[A-Z][a-z]?Rn[A-Z][a-z]?Y[A-Z][a-z]?Y[A-Z][a-z]?Ar/g;

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
  const [replacements, targetMolecule] = input.split("\n\n");
  const tokenCount = (targetMolecule.match(TOKEN) ?? []).length;
  const replace1 = 1 + -!!(replacements.match(REPLACE_1) ?? []).length;
  const replace4 = (targetMolecule.match(REPLACE_4) ?? []).length;
  const replace6 = (targetMolecule.match(REPLACE_6) ?? []).length;
  const replace8 = (targetMolecule.match(REPLACE_8) ?? []).length;
  return tokenCount - 4 * replace4 - 6 * replace6 - 8 * replace8 - replace1;
}
