import _ from 'lodash';
import { readRelativeInput } from '@/common/file.js';

const readInput = (fileName) => readRelativeInput(import.meta.url, fileName);

const parseInput = (input) => {
  const lines = input.trim().split('\n').map(
    (line) =>
      line.split(',').map(
        (range) => {
          const splitRange = range.split('-');
          return {
            min: parseInt(splitRange[0], 10),
            max: parseInt(splitRange[1], 10),
          };
        },
      ),
  );
  return lines;
};

const fullyContains = ([range1, range2]) => {
  return (range1.min >= range2.min && range1.max <= range2.max) || (range2.min >= range1.min && range2.max <= range1.max);
};

export const solve = (input) => {
  const rangePairs = parseInput(input);
  const fullyContainsPairs = rangePairs.filter(fullyContains);
  return fullyContainsPairs.length;
};

console.log(solve(readInput('example1.txt')), '\n\n\n');
// console.log(solve(readInput('example2.txt')), '\n\n\n');
console.log(solve(readInput('puzzleInput.txt')), '\n\n\n');
