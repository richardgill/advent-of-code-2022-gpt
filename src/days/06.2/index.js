import * as path from 'https://deno.land/std@0.101.0/path/mod.ts';

const readRelativeInput = (importUrl, inputFile) => {
  const dirname = path.dirname(path.fromFileUrl(importUrl));
  const filePath = path.join(dirname, 'data', inputFile);
  return Deno.readTextFileSync(filePath);
};

const readInput = (fileName) => readRelativeInput(import.meta.url, fileName);

export const solve = (input) => {
  // Create an array of characters from the input string
  const chars = input.split('');

  // Create an empty set to store the distinct characters we encounter
  const distinctChars = new Set();

  // Loop through the characters in the input string
  for (let i = 0; i < chars.length; i++) {
    // Add the current character to the set of distinct characters
    distinctChars.add(chars[i]);

    // If we have encountered 14 distinct characters, return the index of the
    // 14th character + 1 (to account for 0-based indexing)
    if (distinctChars.size === 14) {
      return i + 1;
    }

    // If the set contains more than 14 characters, remove the first character
    // from the set so that we only store the last 14 distinct characters
    if (distinctChars.size > 14) {
      distinctChars.delete(chars[i - 14]);
    }
  }
};

console.log(solve('mjqjpqmgbljsphdztnvjfqwrcgsmlb'), '\n\n\n'); // should print 7
console.log(solve('bvwbjplbgvbhsrlpgdmjqwftvncz'), '\n\n\n'); // should print 5
console.log(solve('nppdvjthqldpwncqszvftbrmjlhg'), '\n\n\n'); // should print 6
console.log(solve('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'), '\n\n\n'); // should print 10
console.log(solve('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'), '\n\n\n'); // should print 11

console.log(solve(readInput('example1.txt')), '\n\n\n');
console.log(solve(readInput('puzzleInput.txt')), '\n\n\n');
