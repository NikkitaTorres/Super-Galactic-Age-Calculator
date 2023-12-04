import Age from './../src/Super-Galactic-Age-Calculator.js';

describe('Age', () => {
  test('should correctly determine earth age', () => {
    const ageInstance = new Age(10);
    const earthAge = ageInstance.earthAge;
    expect(earthAge).toEqual(10);
  });

  test('should correctly calculate Mercury age', () => {
    const ageInstance = new Age(10);
    const mercuryAge = ageInstance.calculateMercuryAge();
    expect(mercuryAge).toEqual(2.4);
  });

  test('should correctly calculate Venus age', () => {
    const ageInstance = new Age(10);
    const venusAge = ageInstance.calculateVenusAge();
    expect(venusAge).toEqual(6.2);
  });

  test('should correctly calculate Mars age', () => {
    const ageInstance = new Age(10);
    const marsAge = ageInstance.calculateMarsAge();
    expect(marsAge).toBeCloseTo(18.8, 1);
  });

  test('should correctly calculate Jupiter age', () => {
    const ageInstance = new Age(10);
    const jupiterAge = ageInstance.calculateJupiterAge();
    expect(jupiterAge).toEqual(118.6);
  });
});