interface Particle {
  /** Position vector */
  p: number[];
  /** Velocity vector */
  v: number[];
  /** Acceleration vector */
  a: number[];
  /** Acceleration vector length */
  hypot: number;
  /** Particle index based on input */
  i: number;
}

/** Returns particles from problem input */
const parseInput = (input: string): Particle[] => {
  return input
    .split("\n")
    .map((line) => [...line.matchAll(/-?\d+/g)].map((d) => +d))
    .map(([px, py, pz, vx, vy, vz, ax, ay, az], i) => {
      return {
        p: [px, py, pz],
        v: [vx, vy, vz],
        a: [ax, ay, az],
        hypot: Math.hypot(ax, ay, az),
        i,
      };
    });
};

/** Returns true if particle has not passed origin on this axis */
const precedesOrigin = (pi: number, vi: number, ai: number): boolean => {
  if (!ai) {
    return false;
  }
  const pSign = Math.sign(pi);
  const vSign = Math.sign(vi);
  const aSign = Math.sign(ai);
  return pSign !== vSign || vSign !== aSign;
};

export function part1(input: string): number {
  const particles = parseInput(input);
  // Filter particles with shortest acceleration vectors
  const hypot = Math.min(...particles.map(({ hypot }) => hypot));
  // Return particle that passes closest to origin
  return particles
    .filter((particle) => particle.hypot === hypot)
    .map(({ p, v, a, i }) => {
      let minDistance = Math.hypot(...p);
      while (a.some((ai, i) => precedesOrigin(p[i], v[i], ai))) {
        v = v.map((vx, i) => vx + a[i]);
        p = p.map((px, i) => px + v[i]);
        minDistance = Math.min(minDistance, Math.hypot(...p));
      }
      return [minDistance, i];
    })
    .reduce((a, b) => a[0] < b[0] ? a : b)[1];
}

export function part2(input: string): number {
  const particles = parseInput(input);
  const particlePositions: Map<string, number> = new Map();
  const collidedParticles: Set<number> = new Set();
  for (let { p, v, a, i } of particles) {
    particlePositions.set(p.join(), i);
    while (a.some((ai, i) => precedesOrigin(p[i], v[i], ai))) {
      v = v.map((vx, i) => vx + a[i]);
      p = p.map((px, i) => px + v[i]);
      const key = p.join();
      if (particlePositions.has(key)) {
        collidedParticles.add(particlePositions.get(key)!);
        collidedParticles.add(i);
      } else {
        particlePositions.set(key, i);
      }
    }
    for (let extra = 0; extra < 10; extra++) {
      v = v.map((vx, i) => vx + a[i]);
      p = p.map((px, i) => px + v[i]);
      const key = p.join();
      if (particlePositions.has(key)) {
        collidedParticles.add(particlePositions.get(key)!);
        collidedParticles.add(i);
      } else {
        particlePositions.set(key, i);
      }
    }
  }
  return particles.length - collidedParticles.size;
}
