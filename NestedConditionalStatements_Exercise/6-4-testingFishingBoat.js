function fishingBoat(budget, season, fisherNumber){

    let boatPrice = 0;
    let finalBoatPrice = 0

    switch (season) {
        case "Spring":
            boatPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            boatPrice = 4200;
            break;
        case "Winter":
            boatPrice = 2600;
            break;
    }

    if(fisherNumber <= 6) {
        let boatDiscount = boatPrice * 0.1; //420
        finalBoatPrice = boatPrice - boatDiscount; //3780 
    } else if (fisherNumber >= 7 && fisherNumber <= 11) {
        let boatDiscount = boatPrice * 0.15;
        finalBoatPrice = boatPrice - boatDiscount;
    } else if (fisherNumber > 12) {
        let boatDiscount = boatPrice * 0.25;
        finalBoatPrice = boatPrice - boatDiscount; 
    } 

    if (fisherNumber % 2 == 0 && season != "Autumn") {
        let additionalBoatDiscount = finalBoatPrice * 0.05;
        finalBoatPrice = finalBoatPrice - additionalBoatDiscount;
    }

    if (budget >= finalBoatPrice) {
        let moneyLeft = budget - finalBoatPrice;
        console.log(`Yes! You have ${(moneyLeft).toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = finalBoatPrice - budget;
        console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva.`);
    }

}


fishingBoat(3000, "Summer", 6);