function examPreparation(input) {

    let maxAllowedLowGrades = Number(input[0]);

    let goodGradesCount = 0;
    let lowGradesCount = 0;
    let sumGrades = 0;
    let lastProblem = " ";
    let problemsCount = 0;
    let promblemName = 1;
    let gradeIndex = 2;

    let index = 0;

    while (lowGradesCount < maxAllowedLowGrades) {

        let lastProblem = input[promblemName];

        if (lastProblem === "Enough") {
            lastProblem = input[promblemName - 2];
            let averageGrade = sumGrades / problemsCount;
            console.log(`Average score: ${averageGrade.toFixed(2)}`);
            console.log(`Number of problems: ${problemsCount}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }

        let grade = Number(input[gradeIndex]);

        problemsCount++;


        if (grade <= 4) {
            lowGradesCount++;
        }

        sumGrades = sumGrades + grade;

        promblemName += 2;
        gradeIndex += 2;
    }


    if (lowGradesCount >= maxAllowedLowGrades) {
    console.log(`You need a break, ${lowGradesCount} poor grades.`)
}
}




examPreparation (["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);