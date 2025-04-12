function trainTheTrainers(input) {
    let index = 0;
    let juryCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let totalSum = 0;
    let totalGradesCount = 0;

    while (command !== "Finish") {
        let presentation = command;
        let currentSum = 0;

        for (let i = 0; i < juryCount; i++) {
            let grade = Number(input[index]);
            index++;
            currentSum += grade;
        }

        let average = currentSum / juryCount;
        console.log(`${presentation} - ${average.toFixed(2)}.`);

        totalSum += average;
        totalGradesCount++;

        command = input[index];
        index++;
    }

    let finalAverage = totalSum / totalGradesCount;
    console.log(`Student's final assessment is ${finalAverage.toFixed(2)}.`);
}

trainTheTrainers([
    "2",                   // 2 души в журито
    "While-Loop",          // Име на презентация
    "6.00", "5.50",        // Оценки от журито
    "For-Loop", 
    "5.84", "5.66", 
    "Finish"
]);