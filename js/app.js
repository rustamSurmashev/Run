import {calculateRun} from "./lib.js";

const rateEl = document.getElementById('rate');
const volumeEl = document.getElementById('volume');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

calculateEl.addEventListener('click', function () {
    const rate = parseInt(rateEl.value);
    const volume = parseInt(volumeEl.value);

    if (isNaN(rate)) {
        resultEl.textContent = 'Введите в поле РАСХОД число';
        resultDescriptionEl.textContent = '';
        return;
    }

    if (isNaN(volume)) {
        resultEl.textContent = 'Введите в поле ОБЪЁМ число';
        resultDescriptionEl.textContent = '';
        return;
    }

    if (rate < 1) {
        resultEl.textContent = 'Расход должен быть больше 1 литра на 100 км';
        resultDescriptionEl.textContent = '';
        return;
    }

    if (volume < 1) {
        resultEl.textContent = 'Объём должен быть больше 1 литра';
        resultDescriptionEl.textContent = '';
        return;
    }


    resultEl.textContent = calculateRun(rate, volume);

});


