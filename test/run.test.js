import {calculateRun} from "../js/run";
test ('should show run', () =>{
    const rate = 8.5;
    const volume = 100;
    let result = Math.round(volume*100/rate);

    expect(result).toBe(1176);
});