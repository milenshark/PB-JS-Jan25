function workout(input) {
    let n = Number(input[0]); 
    let m = Number(input[1]); 
    let totalKm = m; 
    let target = 1000; 


    for (let i = 2; i < input.length; i++) {
        let percentageIncrease = Number(input[i]);
        m += m * (percentageIncrease / 100); 
        totalKm += m; 
    }

 
    if (totalKm >= target) {
        let extraKm = Math.ceil(totalKm - target);
        console.log(`You've done a great job running ${extraKm} more kilometers!`);
    } else {
        let missingKm = Math.ceil(target - totalKm);
        console.log(`Sorry Mrs. Ivanova, you need to run ${missingKm} more kilometers`);
    }
}


workout(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"]);