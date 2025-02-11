function cleverLily(age, washingMachinePrice, singleToyPrice) {

    let moneySaved = 0;
    let toyCount = 0
    let moneyGift = 10;

    for (let currentAge = 1; currentAge <= age; currentAge ++) {
        if (currentAge % 2 === 0) {
            moneySaved += moneyGift;
            moneyGift += 10;
            moneySaved -= 1; // Братът взима 1 лев
        } else {
            toyCount += 1;
        }

    }

    // console.log(toyCount);
    // console.log(moneyGift);
    // console.log(moneySaved);

    let totalMoney = moneySaved + (toyCount * singleToyPrice);
    let diff = Math.abs(totalMoney - washingMachinePrice).toFixed(2);

    if (totalMoney >= washingMachinePrice) {
        console.log(`Yes! ${diff}`);
    } else {
        console.log(`No! ${diff}`);
    }


}

cleverLily(10, 170.00, 6);