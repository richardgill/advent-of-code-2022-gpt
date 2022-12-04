import * as path from 'https://deno.land/std@0.101.0/path/mod.ts';

const readRelativeInput = (importUrl, inputFile) => {
  const dirname = path.dirname(path.fromFileUrl(importUrl));
  const filePath = path.join(dirname, 'data', inputFile);
  return Deno.readTextFileSync(filePath);
};

const readInput = (fileName) => readRelativeInput(import.meta.url, fileName);

export const solve = (input) => {
  const rucksacks = input.split('\n');
  let sum = 0;
  for (const rucksack of rucksacks) {
    const compartments = [rucksack.slice(0, rucksack.length / 2), rucksack.slice(rucksack.length / 2)];
    for (const compartment of compartments) {
      for (const char of compartment) {
        if (compartments[0].includes(char) && compartments[1].includes(char)) {
          sum += char.charCodeAt() - 96;
        }
      }
    }
  }
  return sum;
};

console.log(solve(readInput('example1.txt')), '\n\n\n');
console.log(solve(readInput('puzzleInput.txt')), '\n\n\n');
