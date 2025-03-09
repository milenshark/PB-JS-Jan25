function coins(number) {

    let coinTwoleva = 0;
    let coinOneleva = 0;
    let coinFiftyCent = 0;
    let coinTwentyCent = 0;
    let coinTenCent = 0;
    let coinFiveCent = 0;
    let coinTwoCent = 0;
    let coinOneCent = 0;

    let numberFormatted = Number(number.toFixed(2)); 

    while (numberFormatted >= 2) {
        numberFormatted = (numberFormatted - 2).toFixed(2);
        coinTwoleva++;
    }

    while (numberFormatted >= 1) {
        numberFormatted = (numberFormatted - 1).toFixed(2);
        coinOneleva++;
    }

    while (numberFormatted >= 0.5) {
        numberFormatted = (numberFormatted - 0.5).toFixed(2);

        coinFiftyCent++;
    }

    while (numberFormatted >= 0.2) { 
        numberFormatted = (numberFormatted - 0.2).toFixed(2);

        coinTwentyCent++;
    }

    while (numberFormatted >= 0.1) {
        numberFormatted = (numberFormatted - 0.1).toFixed(2);

        coinTenCent++;
    }

    while (numberFormatted >= 0.05) {
        numberFormatted = (numberFormatted - 0.05).toFixed(2);
        coinFiveCent++;
    }

    while (numberFormatted >= 0.02) {
        numberFormatted = (numberFormatted - 0.02).toFixed(2);
        coinTwoCent++;
    }

    while (numberFormatted >= 0.01) {
        numberFormatted = (numberFormatted - 0.01).toFixed(2);
        coinOneCent++;
    }

    let counter = coinTwoleva + coinOneleva + coinFiftyCent + coinTwentyCent 
    + coinTenCent + coinFiveCent + coinTwoCent + coinOneCent;  

    console.log(counter);

}

coins(0.56);