function combinations(result) {

    let counter = 0

    for (let number1 = 0; number1 <= result; number1++) {
        for (let number2 = 0; number2 <= result; number2++) {
            for (let number3 = 0; number3 <= result; number3++) {
                let sum = number1 + number2 + number3;
            
                if (sum == result) {
                    counter++;
                }
            }
        }
    }

    console.log(counter);

}

combinations(5);