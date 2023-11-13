import Age from './../src/Super-Galactic-Age-Calculator.js';

describe('Age', () => {
  test('should correctly determine earth age', () => {
    const earthAge = new Age(10);
    expect(earthAge).toEqual("10");
  });
});