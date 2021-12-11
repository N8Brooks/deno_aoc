export function part1(input: string): number {
  let sum = 0;
  for (const group of input.split("\n\n")) {
    const counts: Set<string> = new Set();
    for (const response of group.split("\n")) {
      for (const question of response) {
        counts.add(question);
      }
    }
    sum += counts.size;
  }
  return sum;
}

export function part2(input: string): number {
  let sum = 0;
  for (const group of input.split("\n\n")) {
    const [response0, ...responses] = group.split("\n");
    const questions = new Set(response0);
    for (const response of responses) {
      for (const question of questions) {
        if (!response.includes(question)) {
          questions.delete(question);
        }
      }
    }
    sum += questions.size;
  }
  return sum;
}
