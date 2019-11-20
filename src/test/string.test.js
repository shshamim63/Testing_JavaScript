const { capitalize, reverseString } = require('../lib/string');

test('returns string with the first character capitalized', () => {
  expect(capitalize('microverse')).toBe('Microverse');
});

test('returns string as reversed', () => {
  expect(reverseString('cricket')).toBe('tekcirc');
});