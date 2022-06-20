import quickSort from "./quickSort.js";

export default (value = '') => {
  if (value.length === 0) return 'input is empty';

  const numArray = value.split(',')
    .map((l) => l.match(/\d|-/g))
    .filter((l) => l !== null)
    .map((l) => Number(l.join('')))
  
  const [minOne, minTwo, ...rest] = quickSort(numArray, 0, numArray.length - 1);

  if (typeof minOne !== 'number' || typeof minOne !== 'number') {
    return 'not enough numbers for a sum expression';
  }

  return minOne + minTwo;
 }