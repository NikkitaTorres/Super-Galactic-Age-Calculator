export default class Age{
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = this.calculateMercuryAge();
    this.venusAge = this.calculateVenusAge();
    this.marsAge = this.calculateMarsAge();
    this.jupiterAge = this.calculateJupiterAge();
  }

  calculateMercuryAge() {
    return this.earthAge * 0.24;
  }

  calculateVenusAge() {
    return this.earthAge * 0.62;
  }

  calculateMarsAge() {
    return this.earthAge * 1.88;
  }

  calculateJupiterAge() {
    return this.earthAge * 11.86;
  }
}