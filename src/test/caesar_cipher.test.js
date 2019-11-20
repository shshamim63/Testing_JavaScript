const ceaser = require('../lib/caesar_cipher');

test('CaesarCipher encryption', () => {
  expect(caesar('microverse.>?', 7)).toBe('tpjyvclyzl.>?');
  expect(caesar('Microverse', 7)).toBe('Tpjyvclyzl');
});
