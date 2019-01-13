import {calculateRun} from "./run.js";

const rateEl = document.getElementById('rate');
const volumeEl = document.getElementById('volume');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

calculateEl.addEventListener('click', function () {
    const rate = parseInt(rateEl.value);
    const volume = parseInt(volumeEl.value);

    resultEl.textContent = calculateRun(rate, volume);

});


