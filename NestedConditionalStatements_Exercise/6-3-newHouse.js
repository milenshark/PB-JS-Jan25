function newHouse(flowerType, flowerCount, budget) {

    switch (flowerType) {
        case "Roses":
            let rosePrice = flowerCount * 5;

            let finalRosePrice = 0;

            if (flowerCount > 80) {
                let rosePriceDiscount = rosePrice * 0.10;     
                finalRosePrice = rosePrice - rosePriceDiscount;
            } else {
                finalRosePrice = rosePrice;
            }

            if (budget >= finalRosePrice) {
                let moneyLeft = budget - finalRosePrice;
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(moneyLeft).toFixed(2)} leva left.`);

            } else if (budget < finalRosePrice) {
                let moneyNeeded = finalRosePrice - budget;
                console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
            }
            break;

        case "Dahlias":
            let dahliasPrice = flowerCount * 3.80;

            let finalDahliasPrice = 0;

            if (flowerCount > 90) {
                let dahliasPriceDiscount = dahliasPrice * 0.15;     
                finalDahliasPrice = dahliasPrice - dahliasPriceDiscount;
            } else {
                finalDahliasPrice = dahliasPrice;
            }

            if (budget >= finalDahliasPrice) {
                let moneyLeft = budget - finalDahliasPrice;
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(moneyLeft).toFixed(2)} leva left.`);

            } else if (budget < finalDahliasPrice) {
                let moneyNeeded = finalDahliasPrice - budget;
                console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
            }
            break;

        case "Tulips":
            let tulipsPrice = flowerCount * 2.80;

            let finalTulipsPrice = 0;

            if (flowerCount > 80) {
                let tulipsPriceDiscount = tulipsPrice * 0.15;     
                finalTulipsPrice = tulipsPrice - tulipsPriceDiscount;
            } else {
                finalTulipsPrice = tulipsPrice;
            }

            if (budget >= finalTulipsPrice) {
                let moneyLeft = budget - finalTulipsPrice;
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(moneyLeft).toFixed(2)} leva left.`);

            } else if (budget < finalTulipsPrice) {
                let moneyNeeded = finalTulipsPrice - budget;
                console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
            }
            break;

        case "Narcissus":
            let narcissusPrice = flowerCount * 3.00;

            let finalNarcissusPrice = 0;

            if (flowerCount < 120) {
                let tulipsPriceDiscount = narcissusPrice * 0.15;     
                finalNarcissusPrice = narcissusPrice + tulipsPriceDiscount;
            } else {
                finalNarcissusPrice = narcissusPrice;
            }

            if (budget >= finalNarcissusPrice) {
                let moneyLeft = budget - finalNarcissusPrice;
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(moneyLeft).toFixed(2)} leva left.`);

            } else if (budget < finalNarcissusPrice) {
                let moneyNeeded = finalNarcissusPrice - budget;
                console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
            }
            break;

        case "Gladiolus":
            let gladiolusPrice = flowerCount * 2.50;

            let finalGladiolusPrice = 0;

            if (flowerCount < 80) {
                let gladiolusPriceDiscount = gladiolusPrice * 0.2;     
                finalGladiolusPrice = gladiolusPrice + gladiolusPriceDiscount;
            } else {
                finalGladiolusPrice = gladiolusPrice;
            }

            if (budget >= finalGladiolusPrice) {
                let moneyLeft = budget - finalGladiolusPrice;
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(moneyLeft).toFixed(2)} leva left.`);

            } else if (budget < finalGladiolusPrice) {
                let moneyNeeded = finalGladiolusPrice - budget;
                console.log(`Not enough money, you need ${(moneyNeeded).toFixed(2)} leva more.`);
            }
            break;

        default:
            console.log("error");
            break;
    }


}


newHouse("Tulips",88,260);