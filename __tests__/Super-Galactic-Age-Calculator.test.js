import Age from './../src/Super-Galactic-Age-Calculator.js';

describe('Age', () => {
  test('should correctly determine all ages', () => {
    const ageInstance = new Age(10);
    const earthAge = ageInstance.earthAge;
    const mercuryAge = ageInstance.mercuryAge;
    const venusAge = ageInstance.venusAge;
    const marsAge = ageInstance.marsAge;
    const jupiterAge = ageInstance.jupiterAge;

    expect(earthAge).toEqual(10);
    expect(mercuryAge).toEqual(2.4);
    expect(venusAge).toEqual(6.2);
    expect(marsAge).toBeCloseTo(18.8, 1);
    expect(jupiterAge).toEqual(118.6);
  });
});