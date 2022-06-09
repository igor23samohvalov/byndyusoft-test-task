import getSum from '../src/getSum';

const testStr1 = '15,   22, sadds,  3 , 10  , 10,  -5';

test('getSum returns sum of the lowest nums', () => {
  expect(getSum(testStr1)).toBe(-2);
});
test('getSum recognizes empty input', () => {
  expect(getSum()).toBe('input is empty');
});
test('getSum recognizes the absense of nums in input', () => {
  expect(getSum('aa, sads, sa')).toBe('not enough numbers for a sum expression');
});
