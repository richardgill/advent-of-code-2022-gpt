import * as path from 'https://deno.land/std@0.101.0/path/mod.ts';

const readRelativeInput = (importUrl, inputFile) => {
  const dirname = path.dirname(path.fromFileUrl(importUrl));
  const filePath = path.join(dirname, 'data', inputFile);
  return Deno.readTextFileSync(filePath);
};

const readInput = (fileName) => readRelativeInput(import.meta.url, fileName);

export const solve = (input) => {
  const rucksacks = input.split('\n').filter(Boolean);
  const commonLetters = rucksacks.map(
    (rucksack) =>
      rucksack.substring(0, rucksack.length / 2).split('')
        .filter(
          (letter, index) =>
            rucksack.substring(rucksack.length / 2, rucksack.length).split('')
              .indexOf(letter) !== -1,
        )[0],
  );
  const priorities = commonLetters.map((letter) => letter.charCodeAt(0) < 97 ? letter.charCodeAt(0) - 64 + 26 : letter.charCodeAt(0) - 96);
  const sumOfPriorities = priorities.reduce((acc, priority) => acc + priority, 0);
  return sumOfPriorities;
};

console.log(solve(readInput('example1.txt')), '\n\n\n');
console.log(solve(readInput('puzzleInput.txt')), '\n\n\n');
