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

  const ageDifference = calculateAgeDifference(ageInstance.earthAge, youngerAge);
  document.getElementById('youngerResult').innerHTML = `Age Difference: ${ageDifference} years`;
});

function calculateAgeDifference(currentAge, youngerAge) {
  if (youngerAge >= currentAge) {
    return "Invalid input. The younger age should be less than the current age in";
  }

  return currentAge - youngerAge;
}