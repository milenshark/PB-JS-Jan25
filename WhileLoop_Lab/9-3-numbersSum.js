function numbersSum(input) {

    let firstNumber = Number(input[0]);
    
    let index = 1;
    let sum = 0;
    
    while (sum < firstNumber) {
        let number = Number(input[index]);
        sum += number;
        index++;
    }
    
    console.log(sum);

}


numbersSum(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"]);
    