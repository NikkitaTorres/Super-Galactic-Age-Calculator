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
      earthAge: "Invalid input. The younger age should be less than the current age.",
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