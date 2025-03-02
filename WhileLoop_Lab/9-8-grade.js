function grades (input){

    let schoolmate = input[0];
    let classNumber = 1;
    let totalGrades = 0 ;
    let failCount = 0;
    let index = 1;

    while (classNumber <= 12) {
            let grade = Number(input[index]);
            index ++

           if (grade < 4.00) {
            failCount ++
            if (failCount === 2) {
                console.log(`${schoolmate} has been excluded at ${classNumber} grade`)
                break;
            }
            continue;
        } 
            totalGrades += grade
            classNumber ++

    }

    if (failCount < 2) {
           let averageGrade = totalGrades / 12;
           console.log (`${schoolmate} graduated. Average grade: ${averageGrade.toFixed(2)}`);
        }


}


 grades (["Mimi", 
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"]);
    