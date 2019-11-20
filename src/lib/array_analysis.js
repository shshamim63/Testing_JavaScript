const arrayAnalysis = (arr) => {
  return {
    average: (arr.reduce((a, b) => a + b) / arr.length),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

module.exports = arrayAnalysis;
