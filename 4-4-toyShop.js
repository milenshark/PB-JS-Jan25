function toyShop(price, puzzels, dolls, bears, minions, trucks){

    let puzzelsPrice = 2.60;
    let dollsPrice = 3;
    let bearsPrice = 4.10;
    let minionsPrice = 8.20;
    let trucksPrice = 2;

    let sumTotalToys = puzzels + dolls + bears + minions + trucks;

    let totalPrice = (puzzels * puzzelsPrice) + (dolls * dollsPrice) + (bears * bearsPrice) + (minions * minionsPrice) + (trucks * trucksPrice);

    if (sumTotalToys >= 50) {
        totalPrice = totalPrice * 0.75

    }

    let rentShop = totalPrice * 0.10;

    let outcome = totalPrice - rentShop;

    if (outcome >= price) {
        let moneyLeft = outcome - price;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    
    } else {
        let moneyNeeded = price - outcome;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }



}

toyShop(40.8, 20, 25, 30, 50, 10);