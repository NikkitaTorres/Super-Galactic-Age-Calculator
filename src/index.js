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