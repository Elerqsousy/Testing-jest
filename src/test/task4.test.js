const capitalize = require('../task4.js');

describe('only first letter uppercase', () => {
  test('all letters lowercase', () => {
    expect(capitalize('rizk')).toBe('Rizk');
  });

  test('first and a middle letters uppercase', () => {
    expect(capitalize('RiZk')).toBe('Rizk');
  });

  test('all letters uppercase', () => {
    expect(capitalize('RIZK')).toBe('Rizk');
  });
});