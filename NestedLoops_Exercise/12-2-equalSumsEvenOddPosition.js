function equalSumEvenOddPosition (number1, number2) {
    let printLine = '';

    for (let i = number1; i <= number2; i++) {
        let curentNumber = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j <= curentNumber.length; j++) {
            let currentDigit = Number(curentNumber.charAt(j));

            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum +=currentDigit;  
            }
        }
        if (oddSum === evenSum) {
            printLine += `${i} `
        }
    }
    console.log(printLine);
}

equalSumEvenOddPosition (100000,
    100050);