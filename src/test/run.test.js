import {calculateRun} from "../js/lib.js";
test ('should show run', () =>{

    let result = calculateRun(10, 100);

    expect(result).toBe(1000);
});
