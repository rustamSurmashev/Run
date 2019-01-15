export function calculateRun(rate, volume) {
    let result;
    result = volume*100/rate;
    return Math.round(result);
}




