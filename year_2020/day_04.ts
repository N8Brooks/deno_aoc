const pattern = /([a-z]{3}):([a-z0-9#]+)/g;

const passportFields = [
  "byr",
  "iyr",
  "eyr",
  "hgt",
  "hcl",
  "ecl",
  "pid",
];

const eyeColors = {
  amb: true,
  blu: true,
  brn: true,
  gry: true,
  grn: true,
  hzl: true,
  oth: true,
};

export function part1(input: string): number {
  let valid = 0;
  for (const passportinput of input.split("\n\n")) {
    const passport = getPassportObject(passportinput);
    if (passportFields.every((field) => field in passport)) {
      valid++;
    }
  }
  return valid;
}

export function part2(input: string): number {
  let valid = 0;
  for (const passportinput of input.split("\n\n")) {
    const {
      byr = "",
      iyr = "",
      eyr = "",
      hgt = "",
      hcl = "",
      ecl = "",
      pid = "",
    } = getPassportObject(passportinput);

    if (+byr < 1920 || 2002 < +byr) {
      continue;
    } else if (+iyr < 2010 || 2020 < +iyr) {
      continue;
    } else if (+eyr < 2020 || 2030 < +eyr) {
      continue;
    } else if (!/^#[a-f0-9]{6}$/.test(hcl)) {
      continue;
    } else if (!(ecl in eyeColors)) {
      continue;
    } else if (!/^\d{9}$/.test(pid)) {
      continue;
    }

    const height = parseInt(hgt);
    if (hgt.endsWith("cm")) {
      if (height < 150 || 193 < height) {
        continue;
      }
    } else if (hgt.endsWith("in")) {
      if (height < 59 || 76 < height) {
        continue;
      }
    } else {
      continue;
    }

    valid += 1;
  }
  return valid;
}

function getPassportObject(passportinput: string) {
  return Object.fromEntries([...passportinput.matchAll(pattern)]
    .map(([, field, value]) => [field, value]));
}
