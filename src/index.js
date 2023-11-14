import './css/styles.css';
import Age from './Super-Galactic-Age-Calculator.js';

document.getElementById('ageForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const currentAge = document.getElementById('currentAge').value;
  const ageInstance = new Age(currentAge);

  document.getElementById('result').innerHTML = `
    Earth Age: ${ageInstance.earthAge}<br>
    Mercury Age: ${ageInstance.mercuryAge}<br>
    Venus Age: ${ageInstance.venusAge}<br>
    Mars Age: ${ageInstance.marsAge}<br>
    Jupiter Age: ${ageInstance.jupiterAge}
  `;
});

// Future Age Section
document.getElementById('ageForm2').addEventListener('submit', function (event) {
  event.preventDefault();

  const currentAge = document.getElementById('currentAge').value;
  const futureAge = document.getElementById('futureAge').value;

  const ageInstance = new Age(currentAge);

  const futureAgeDifference = calculateFutureAgeDifference(ageInstance, futureAge);

  document.getElementById('futureResult').innerHTML = `
    Age Difference (Earth): ${futureAgeDifference.earthAge} years<br>
    Age Difference (Mercury): ${futureAgeDifference.mercuryAge} years<br>
    Age Difference (Venus): ${futureAgeDifference.venusAge} years<br>
    Age Difference (Mars): ${futureAgeDifference.marsAge} years<br>
    Age Difference (Jupiter): ${futureAgeDifference.jupiterAge} years
  `;
});

function calculateFutureAgeDifference(ageInstance, futureAge) {
  if (futureAge <= ageInstance.earthAge) {
    return {
      earthAge: "Invalid input. The future age should be greater than the current age in",
      mercuryAge: "Invalid input.",
      venusAge: "Invalid input.",
      marsAge: "Invalid input.",
      jupiterAge: "Invalid input."
    };
  }

  const ageDifferenceEarth = futureAge - ageInstance.earthAge;
  const ageDifferenceMercury = (futureAge * 0.24) - ageInstance.calculateMercuryAge();
  const ageDifferenceVenus = (futureAge * 0.62) - ageInstance.calculateVenusAge();
  const ageDifferenceMars = (futureAge * 1.88) - ageInstance.calculateMarsAge();
  const ageDifferenceJupiter = (futureAge * 11.86) - ageInstance.calculateJupiterAge();

  return {
    earthAge: ageDifferenceEarth,
    mercuryAge: ageDifferenceMercury,
    venusAge: ageDifferenceVenus,
    marsAge: ageDifferenceMars,
    jupiterAge: ageDifferenceJupiter
  };
}

//Past Age Section
document.getElementById('ageForm3').addEventListener('submit', function (event) {
  event.preventDefault();

  const currentAge = document.getElementById('currentAge').value;
  const youngerAge = document.getElementById('youngerAge').value;

  const ageInstance = new Age(currentAge);

  const ageDifferences = calculateAgeDifference(ageInstance, youngerAge);

  document.getElementById('youngerResult').innerHTML = `
    Age Difference (Earth): ${ageDifferences.earthAge} years<br>
    Age Difference (Mercury): ${ageDifferences.mercuryAge} years<br>
    Age Difference (Venus): ${ageDifferences.venusAge} years<br>
    Age Difference (Mars): ${ageDifferences.marsAge} years<br>
    Age Difference (Jupiter): ${ageDifferences.jupiterAge} years
  `;
});

function calculateAgeDifference(ageInstance, youngerAge) {
  if (youngerAge >= ageInstance.earthAge) {
    return {
      earthAge: "Invalid input. The younger age should be less than the current age in",
      mercuryAge: "Invalid input.",
      venusAge: "Invalid input.",
      marsAge: "Invalid input.",
      jupiterAge: "Invalid input."
    };
  }

  const ageDifferenceEarth = ageInstance.earthAge - youngerAge;
  const ageDifferenceMercury = ageInstance.calculateMercuryAge() - (youngerAge * 0.24);
  const ageDifferenceVenus = ageInstance.calculateVenusAge() - (youngerAge * 0.62);
  const ageDifferenceMars = ageInstance.calculateMarsAge() - (youngerAge * 1.88);
  const ageDifferenceJupiter = ageInstance.calculateJupiterAge() - (youngerAge * 11.86);

  return {
    earthAge: ageDifferenceEarth,
    mercuryAge: ageDifferenceMercury,
    venusAge: ageDifferenceVenus,
    marsAge: ageDifferenceMars,
    jupiterAge: ageDifferenceJupiter
  };
}