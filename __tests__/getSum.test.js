import getSum from '../src/getSum';

const testStr1 = '0, 0, 55, sad3, sads345dsad, -100, -55';

test('getSum returns sum of the lowest nums', () => {
  expect(getSum(testStr1)).toBe(-155);
});
test('getSum recognizes empty input', () => {
  expect(getSum()).toBe('input is empty');
});
test('getSum recognizes the absense of nums in input', () => {
  expect(getSum('aa, sads, sa')).toBe('not enough numbers for a sum expression');
});
