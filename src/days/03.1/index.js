import _ from 'lodash';
import { readRelativeInput } from '@/common/file.js';

const readInput = (fileName) => readRelativeInput(import.meta.url, fileName);

const letterToPriority = (letter) => {
  if (/[A-Z]/.test(letter)) {
    return letter.charCodeAt(0) - 38;
  }
  return letter.charCodeAt(0) - 96;
};

const findDuplicate = (rucksack) => {
  const compartmentA = rucksack.slice(0, rucksack.length / 2);
  const compartmentB = rucksack.slice(rucksack.length / 2, rucksack.length);
  const duplicate = _.intersection(compartmentA, compartmentB);
  console.log(compartmentA, compartmentB);
  console.log(duplicate);
  if (duplicate.length !== 1) {
    throw new Error('duplicate.length !== 1');
  }
  return duplicate[0];
};

export const solve = (input) => {
  const rucksacks = input.trim().split('\n').map((line) => line.split('').map((x) => x));
  return _.chain(rucksacks).map(findDuplicate).map(letterToPriority).sum().value();
};

console.log(solve(readInput('example1.txt')), '\n\n\n');
// console.log(solve(readInput('example2.txt')), '\n\n\n');
console.log(solve(readInput('puzzleInput.txt')), '\n\n\n');
