import _ from 'lodash';
import { readRelativeInput } from '@/common/file.js';

const readInput = (fileName) => readRelativeInput(import.meta.url, fileName);

const numberToActualMove = {
  [1]: 'Rock',
  [2]: 'Paper',
  [3]: 'Scissors',
};

const scoreMyMove = (myMove) => {
  return myMove.charCodeAt(0) - (64 + 23);
};

const scoreTheirMove = (myMove) => {
  return myMove.charCodeAt(0) - 64;
};

const scoreResult = (theirMove, myMove) => {
  if (scoreMyMove(myMove) - scoreTheirMove(theirMove) === 0) {
    return 3;
  }
  if ([1, -2].includes(scoreMyMove(myMove) - scoreTheirMove(theirMove))) {
    return 6;
  } else if ([-1, 2].includes(scoreMyMove(myMove) - scoreTheirMove(theirMove))) {
    return 0;
  }
  throw new Error(`never happens myMove: ${myMove} theirMove: ${theirMove} res: ${scoreMyMove(myMove) - scoreTheirMove(theirMove)}`);
};

const scoreMove = ([theirMove, myMove]) => {
  console.log(
    theirMove,
    myMove,
    numberToActualMove[scoreTheirMove(theirMove)],
    numberToActualMove[scoreMyMove(myMove)],
    scoreResult(theirMove, myMove),
  );
  return scoreMyMove(myMove) + scoreResult(theirMove, myMove);
};

export const solve = (input) => {
  const moves = input.trim().split('\n').map((line) => line.split(' '));
  return _.chain(moves).map(scoreMove).sum().value();
};

console.log(solve(readInput('example1.txt')), '\n\n\n');
// console.log(solve(readInput('example2.txt')), '\n\n\n');
console.log(solve(readInput('puzzleInput.txt')), '\n\n\n');
