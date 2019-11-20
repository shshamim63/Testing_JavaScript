const { capitalize } = require('../lib/string');

test('returns string with the first character capitalized', () => {
  expect(capitalize('microverse')).toBe('Microverse');
});
