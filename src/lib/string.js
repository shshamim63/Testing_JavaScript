const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const reverseString = (str) => str.split('').reverse().join('');

module.exports = { capitalize, reverseString };
