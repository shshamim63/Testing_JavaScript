const calculator = require('../lib/calculator');

test('returns sum of two number', () => {
  expect(calculator.add(2, 5)).toBe(7);
});
