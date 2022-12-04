import _ from 'lodash';
import * as path from 'https://deno.land/std@0.101.0/path/mod.ts';

const readRelativeInput = (importUrl, inputFile) => {
  const dirname = path.dirname(path.fromFileUrl(importUrl));
  const filePath = path.join(dirname, 'data', inputFile);
  return Deno.readTextFileSync(filePath);
};

const readInput = (fileName) => readRelativeInput(import.meta.url, fileName);

export const solve = (input) => {
  console.log(input);
  return 'answer';
};

console.log(solve(readInput('example1.txt')), '\n\n\n');
// console.log(solve(readInput('example2.txt')), '\n\n\n');
// console.log(solve(readInput('puzzleInput.txt')), '\n\n\n');
