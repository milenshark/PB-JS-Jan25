function sumOfNumbers(numberText) {

    let sum = 0;
    for (i = 0; i < numberText.length; i++) {
        sum += numberText.charAt(i);
    }

    console.log(sum);

}


sumOfNumbers("1234");