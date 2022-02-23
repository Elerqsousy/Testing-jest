const reverseString = require('../task2.js');

test('return reversed string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('return reversed string', () => {
  expect(reverseString('kelo')).toBe('olek');
});
