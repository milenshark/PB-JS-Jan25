function sumOfTwoNumbers(low, high, magicNum) {

    let counter = 0;
    let number1 = 0;
    let number2 = 0;
    let sum = 0;
    let sumIsEqualToMagicNum = false;

    for (number1 = low; number1 <= high; number1++) {
        for (number2 = low; number2 <= high; number2++) {
            counter ++
            sum = number1 + number2;
            if (sum == magicNum) {
                console.log(`Combination N:${counter} (${number1} + ${number2} = ${magicNum})`)
                sumIsEqualToMagicNum = true;
                break;
            }
        }

        if (sumIsEqualToMagicNum == true) {
            break;
        }
    }


    if (sumIsEqualToMagicNum === false) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }

}

sumOfTwoNumbers(1,
    10,
    5); 