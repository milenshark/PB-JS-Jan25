function walking (input) {

    let goalSteps = 10000;
    let index = 0;
    let currentSteps = 0;
    let sumSteps = 0;


    while (index < input.length) {
    //while (sumSteps < goalSteps) {
        currentSteps = input[index];
        if (currentSteps === "Going home") {
            index++;
            continue;
        } else {
        currentSteps = Number(input[index]);
        sumSteps += currentSteps;
        }
        index++
    }
    

    if (sumSteps >= goalSteps) {
        let stepsDifference = sumSteps - goalSteps;
        console.log(`Goal reached! Good job!`);
        console.log(`${stepsDifference} steps over the goal!`);
    } else {
        let stepsDifference = goalSteps - sumSteps;
        console.log(`${stepsDifference} more steps to reach goal.`);
    }


}

walking (["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"]);