import _ from 'lodash';
import * as path from 'https://deno.land/std@0.101.0/path/mod.ts';

const readRelativeInput = (importUrl, inputFile) => {
  const dirname = path.dirname(path.fromFileUrl(importUrl));
  const filePath = path.join(dirname, 'data', inputFile);
  return Deno.readTextFileSync(filePath);
};

const readInput = (fileName) => readRelativeInput(import.meta.url, fileName);

const guide = {
  A: { Y: 8, X: 1, Z: 6 },
  B: { Y: 6, X: 8, Z: 1 },
  C: { Y: 1, X: 6, Z: 8 },
};

export const solve = (input) => {
  const rounds = input.split('\n');
  return rounds.reduce((acc, round) => {
    if (round.length === 0) return acc;
    const [opponent, choice] = round.split(' ');
    return acc + guide[opponent][choice];
  }, 0);
};

console.log(solve(readInput('example1.txt')), '\n\n\n');
console.log(solve(readInput('puzzleInput.txt')), '\n\n\n');
