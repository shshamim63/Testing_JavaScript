const arrayAnalysis = require('../lib/array_analysis');

test('returns an array\' sanalysis ', () => {
  expect(arrayAnalysis([1, 2, 3, 4, 5, 6])).toEqual({
    average: 3.50,
    min: 1,
    max: 6,
    length: 6,
  });
});
