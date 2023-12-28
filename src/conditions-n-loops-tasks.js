/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let result = a;
  if (a > b && a > c) {
    result = a;
  }
  if (b > a && b > c) {
    result = b;
  }
  if (c > a && c > b) {
    result = c;
  }
  return result;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
// function canQueenCaptureKing(queen, king) {
//   const { x: staticQueenX, y: staticQueenY } = queen;
//   const { x: kingX, y: kingY } = king;

//   function queenInc(inc, comp, mainCoord, minorCoord) {
//     for (let i = inc; i <= 8; i += 1) {
//       if (i === mainCoord && comp === minorCoord) {
//         return true;
//       }
//     }
//     return false;
//   }

//   function queenDec(dec, comp, mainCoord, minorCoord) {
//     for (let i = dec; i >= 1; i -= 1) {
//       if (i === mainCoord && comp === minorCoord) {
//         return true;
//       }
//     }
//     return false;
//   }

//   function queenIncBoth(x, y, command) {
//     let parX = x;
//     let parY = y;
//     while (parX <= 8 && parY <= 8 && parX >= 1 && parY >= 1) {
//       if (command === 1) {
//         parX += 1;
//         parY += 1;
//       }
//       if (command === 2) {
//         parX -= 1;
//         parY -= 1;
//       }
//       if (command === 3) {
//         parX += 1;
//         parY -= 1;
//       }
//       if (command === 4) {
//         parX -= 1;
//         parY += 1;
//       }
//       if (parX === kingX && parY === kingY) {
//         return true;
//       }
//     }
//     return false;
//   }

//   const result =
//     queenInc(staticQueenX, staticQueenY, kingX, kingY) ||
//     queenDec(staticQueenX, staticQueenY, kingX, kingY) ||
//     queenInc(staticQueenY, staticQueenX, kingY, kingX) ||
//     queenDec(staticQueenY, staticQueenX, kingY, kingX) ||
//     queenIncBoth(staticQueenX, staticQueenY, 1) ||
//     queenIncBoth(staticQueenX, staticQueenY, 2) ||
//     queenIncBoth(staticQueenX, staticQueenY, 3) ||
//     queenIncBoth(staticQueenX, staticQueenY, 4);
//   return result;
// }

function canQueenCaptureKing(queen, king) {
  const { x: queenX, y: queenY } = queen;
  const { x: kingX, y: kingY } = king;

  if (queenX === kingX || queenY === kingY) {
    return true;
  }

  if (Math.abs(queenX - kingX) === Math.abs(queenY - kingY)) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }
  if (a === c || a === b || c === b) {
    if (a === c) {
      return a + c > b;
    }
    if (a === b) {
      return a + b > c;
    }
    if (c === b) {
      return c + b > a;
    }
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  const dictionary = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
  };
  if (num > 10) {
    const ones = num % 10;
    let tens = Math.floor(num / 10) * 10;
    while (tens >= 10) {
      tens -= 10;
      result += dictionary[10];
    }
    result += dictionary[ones];
  } else {
    result = dictionary[num];
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  const dictionary = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero',
    '-': 'minus',
    ',': 'point',
    '.': 'point',
  };
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (result) {
      case '':
        result += dictionary[numberStr[i]];
        break;
      default:
        result += ` ${dictionary[numberStr[i]]}`;
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let lastChar = str.length - 1;
  for (let firstChar = 0; firstChar < str.length; firstChar += 1) {
    if (str[firstChar] !== str[lastChar]) return false;
    if (firstChar === lastChar) return true;
    lastChar -= 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let number = Math.abs(num);

  while (number > 0) {
    const rem = number % 10;
    if (rem === digit) {
      return true;
    }
    number = Math.floor(number / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) return -1;

  for (let i = 1; i < arr.length - 1; i += 1) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }

    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const major = [];
  for (let i = 0; i < size; i += 1) {
    const minor = [];
    for (let n = 0; n < size; n += 1) {
      minor[n] = 0;
    }
    major[i] = minor;
  }
  let count = 1;
  let k = 0;
  let command = 'right';
  for (let j = 0; j < size; j += 1) {
    let check = true;
    if (count > size * size) break;
    while (command === 'right' && check) {
      if (k >= size || major[j][k] !== 0) {
        command = 'down';
        check = !check;
        k -= 1;
        break;
      }
      major[j][k] = count;
      k += 1;
      count += 1;
    }
    while (command === 'down' && check) {
      if (j >= size || major[j][k] !== 0) {
        command = 'left';
        check = !check;
        k -= 1;
        j -= 2;
        break;
      }
      major[j][k] = count;
      j += 1;
      count += 1;
    }
    while (command === 'left' && check) {
      if (k >= size || major[j][k] !== 0) {
        command = 'up';
        check = !check;
        k += 1;
        j -= 2;
        break;
      }
      major[j][k] = count;
      k -= 1;
      count += 1;
    }
    while (command === 'up' && check) {
      if (major[j][k] !== 0) {
        command = 'right';
        check = !check;
        k += 1;
        break;
      }
      major[j][k] = count;
      j -= 1;
      count += 1;
    }
  }
  return major;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const arr = [];
  let main = matrix.length - 1;
  let id = 0;
  let i = 0;
  for (let j = 0; j < matrix.length; j += 1) {
    arr[j] = [];
  }
  while (id < matrix.length) {
    if (main < 0) {
      id += 1;
      main = matrix.length - 1;
      i = 0;
    } else {
      arr[id][i] = matrix[main][id];
      main -= 1;
      i += 1;
    }
  }
  console.log(arr);
  return arr;
}

rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(/* str, iterations */) {
  throw new Error('Not implemented');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
