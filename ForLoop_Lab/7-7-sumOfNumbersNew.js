function sumOfNumbers(numberAsString) {

    let sum = 0;
    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);
    }
    console.log(`The sum of the digits is: ${sum}`);


}


sumOfNumbers("1234");