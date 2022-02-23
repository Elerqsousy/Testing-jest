const stringLength = require('../task1.js');

test('Error: string is longer than 10 characters', () => {
  expect(() => stringLength('Life, the universe and everything. Answer:')).toThrow("sting can't be longer than 10 characters");
});

test('Error: string is empty', () => {
  expect(() => stringLength('')).toThrow("sting can't be empty");
});

test('0 < string < 11, return string length', () => {
  expect(stringLength('hello')).toBe(5);
});
