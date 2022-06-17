import getSum from '../src/getSum';

const testStr1 = '15,  dasd 22, sa2dds,  dsd , 10asd  , ,  -5';

test('getSum returns sum of the lowest nums', () => {
  expect(getSum(testStr1)).toBe(-3);
});
test('getSum recognizes empty input', () => {
  expect(getSum()).toBe('input is empty');
});
test('getSum recognizes the absense of nums in input', () => {
  expect(getSum('aa, sads, sa')).toBe('not enough numbers for a sum expression');
});
