import { Age } from './../src/Super-Galactic-Age-Calculator.js';

describe('Age', () => {
  test('should correctly determine earth age', () => {
    const ageInstance = new Age(10);
    const earthAge = ageInstance.earthAge;

    expect(earthAge).toEqual(10);
  });
});