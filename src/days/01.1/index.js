import _ from 'lodash';
import { readRelativeInput } from '@/common/file.js';

const readInput = (fileName) => readRelativeInput(import.meta.url, fileName);

export const solve = (input) => {
  const caloriesPerElf = input.trim().split('\n\n').map((elf) => elf.split('\n').map((c) => parseInt(c, 10)));

  return _.chain(caloriesPerElf).map(_.sum).max().value();
};

console.log(solve(readInput('example1.txt')), '\n\n\n');
// console.log(solve(readInput('example2.txt')), '\n\n\n');
console.log(solve(readInput('puzzleInput.txt')), '\n\n\n');
