const calculator = require('../lib/calculator');

test('returns sum of two number', () => {
  expect(calculator.add(2, 5)).toBe(7);
});

test('returns subtract of two number', () => {
  expect(calculator.subtract(7, 5)).toBe(2);
});

test('returns Dividend', () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

test('performs multiplication operation', () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});
