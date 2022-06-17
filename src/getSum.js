export default (value = '') => {
  if (value.length === 0) return 'input is empty';
  if (value.length > 1000000) value = value.slice(0, 1500);
 
   const [minOne, minTwo, ...rest] = value.split(',')
     .map((l) => l.match(/\d|-/g))
     .filter((l) => l !== null)
     .map((l) => Number(l.join('')))
     .sort((a, b) => a - b)
 
   if (!minOne || !minTwo) return 'not enough numbers for a sum expression';
   
   return minOne + minTwo;
 }