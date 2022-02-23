const calculate = require('../task3.js');

describe('sum 2 numbers', () => {
  test('2 positive numbers', () => {
    expect(calculate.add(2, 2)).toBe(4);
  });
  test('negative and positive numbers', () => {
    expect(calculate.add(-2, 2)).toBe(0);
  });
  test('2 negative numbers', () => {
    expect(calculate.add(-2, -3)).toBe(-5);
  });
});

describe('divid 2 numbers', () => {
  test('2 positive numbers', () => {
    expect(calculate.subtract(2, 2)).toBe(0);
  });
  test('negative and positive numbers', () => {
    expect(calculate.subtract(-2, 2)).toBe(-4);
  });
  test('2 negative numbers', () => {
    expect(calculate.subtract(-2, -3)).toBe(1);
  });
});

describe('sum 2 numbers', () => {
  test('2 positive numbers', () => {
    expect(calculate.divide(2, 2)).toBe(1);
  });
  test('negative and positive numbers', () => {
    expect(calculate.divide(-2, 2)).toBe(-1);
  });
  test('2 negative numbers', () => {
    expect(calculate.divide(-6, -3)).toBe(2);
  });
  test('2 negative numbers', () => {
    expect(() => calculate.divide(-2, 0)).toThrow("Can't divid over 0");
  });
});

describe('multiply 2 numbers', () => {
  test('2 positive numbers', () => {
    expect(calculate.multiply(2, 2)).toBe(4);
  });
  test('negative and positive numbers', () => {
    expect(calculate.multiply(-2, 2)).toBe(-4);
  });
  test('negative and positive numbers', () => {
    expect(calculate.multiply(2, -2)).toBe(-4);
  });
  test('2 negative numbers', () => {
    expect(calculate.multiply(-2, -3)).toBe(6);
  });
});
