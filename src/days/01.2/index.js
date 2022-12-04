import _ from 'lodash';
import * as path from 'https://deno.land/std@0.101.0/path/mod.ts';

const readRelativeInput = (importUrl, inputFile) => {
  const dirname = path.dirname(path.fromFileUrl(importUrl));
  const filePath = path.join(dirname, 'data', inputFile);
  return Deno.readTextFileSync(filePath);
};

const readInput = (fileName) => readRelativeInput(import.meta.url, fileName);

const parseInput = (input) => {
  const elves = input.split('\n\n');
  const result = elves.map((elf) => {
    const calories = elf.split('\n').map((c) => Number(c));
    return {
      calories,
      totalCalories: calories.reduce((a, b) => a + b, 0),
    };
  });
  return result;
};

const part1 = (elves) => {
  let maxCalories = 0;
  let maxElf = null;
  for (const elf of elves) {
    if (elf.totalCalories > maxCalories) {
      maxCalories = elf.totalCalories;
      maxElf = elf;
    }
  }
  return maxElf.totalCalories;
};

const part2 = (elves) => {
  const sortedElves = _.sortBy(elves, (elf) => -elf.totalCalories);
  return sortedElves[0].totalCalories + sortedElves[1].totalCalories + sortedElves[2].totalCalories;
};

const solve = (input) => {
  const elves = parseInput(input);
  console.log('Part 1:', part1(elves));
  console.log('Part 2:', part2(elves));
};

console.log(solve(readInput('example1.txt')), '\n\n\n');
console.log(solve(readInput('puzzleInput.txt')), '\n\n\n');
