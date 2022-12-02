import _ from 'lodash';
import { readRelativeInput } from '@/common/file.js';

const readInput = (fileName) => readRelativeInput(import.meta.url, fileName);

const scoreTheirMove = (myMove) => {
  return myMove.charCodeAt(0) - 64;
};

const scoreResult = (theirMove, myMove) => {
  if (myMove - theirMove === 0) {
    return 3;
  }
  if ([1, -2].includes(myMove - theirMove)) {
    return 6;
  } else if ([-1, 2].includes(myMove - theirMove)) {
    return 0;
  }
  throw new Error(`never happens myMove: ${myMove} theirMove: ${theirMove} res: ${myMove - theirMove}`);
};

const calculateRequiredScore = (requiredOutcome) => {
  if (requiredOutcome === 'X') {
    return 0;
  } else if (requiredOutcome === 'Y') {
    return 3;
  } else {
    return 6;
  }
};

const calculateMyMoveScore = (theirMoveScore, requiredOutcome) => {
  const requiredScore = calculateRequiredScore(requiredOutcome);
  for (const myScore of [1, 2, 3]) {
    if (scoreResult(theirMoveScore, myScore) === requiredScore) {
      return myScore;
    }
  }
};

const scoreMove = ([theirMove, myMove]) => {
  const theirMoveScore = scoreTheirMove(theirMove);
  const myMoveScore = calculateMyMoveScore(theirMoveScore, myMove);

  return myMoveScore + scoreResult(theirMoveScore, myMoveScore);
};

export const solve = (input) => {
  const moves = input.trim().split('\n').map((line) => line.split(' '));
  return _.chain(moves).map(scoreMove).sum().value();
};

console.log(solve(readInput('example1.txt')), '\n\n\n');
console.log(solve(readInput('puzzleInput.txt')), '\n\n\n');
