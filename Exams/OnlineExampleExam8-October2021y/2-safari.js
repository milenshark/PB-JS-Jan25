function safari(budget, fuelLiters, day) {
    let fuelPrice = 2.10;
    let guideCost = 100;

    let total = (fuelLiters * fuelPrice) + guideCost;

    if (day === "Saturday") {
        total *= 0.90; // 10% отстъпка
    } else if (day === "Sunday") {
        total *= 0.80; // 20% отстъпка
    }

    let diff = Math.abs(budget - total);

    if (budget >= total) {
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
    }
}

safari(1000, 10, "Sunday");