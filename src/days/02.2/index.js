import _ from 'lodash';
import * as path from 'https://deno.land/std@0.101.0/path/mod.ts';

const readRelativeInput = (importUrl, inputFile) => {
  const dirname = path.dirname(path.fromFileUrl(importUrl));
  const filePath = path.join(dirname, 'data', inputFile);
  return Deno.readTextFileSync(filePath);
};

const readInput = (fileName) => readRelativeInput(import.meta.url, fileName);

const RPS = ['R', 'P', 'S'];

const getScore = (c1, c2) => {
  const [s1, s2] = [RPS.indexOf(c1), RPS.indexOf(c2)];
  const diff = Math.abs(s1 - s2);
  return diff === 0 ? 3 : (diff === 2 ? 1 : 2);
};

export const solve = (input) => {
  const lines = input.split('\n');
  let totalScore = 0;
  for (let i = 0; i < lines.length - 1; i++) {
    const [c1, c2] = [lines[i][0], lines[i][1]];
    const score = getScore(c1, c2);
    if (score === 3) totalScore += 3;
    else if (score === 1 && c1 === c2) totalScore += 0;
    else if (score === 1) totalScore += 6;
    else if (score === 2 && c1 === c2) totalScore += 6;
    else if (score === 2) totalScore += 1;
  }
  return totalScore;
};

console.log(solve(readInput('example1.txt')), '\n\n\n');
console.log(solve(readInput('puzzleInput.txt')), '\n\n\n');
