function numbersDivisibleByNine(number1, number2){

    let sum = 0;
    let buff = "";
    for (let i = number1; i <= number2; i++) {
        if (i % 9 == 0) {
            sum += i;
            buff += i + "\n";
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(buff);

}

numbersDivisibleByNine(100, 200);