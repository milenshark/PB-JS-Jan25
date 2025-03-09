function vacation(input) {

    let moneyNeeded = Number(input[0]);
    let currentMoney = Number(input[1]);

    let index = 2;
    let daysCount = 0;
    let daysSpend = 0;

    while (currentMoney < moneyNeeded) {
        daysCount++
        let operation = input[index];
        index++
        let amount = Number(input[index]);

        if (operation === "spend") {
            daysSpend++

            if (daysSpend === 5) {
                console.log(`You can't save the money.`);
                console.log(`${daysCount}`);
                break;
            }

            currentMoney = currentMoney - amount;
            if (currentMoney <= 0) {
                currentMoney = 0;
            }
        } else if (operation === "save") {
            daysSpend = 0;
            currentMoney = currentMoney + amount;
        }

        index++;
    }

    if (daysSpend < 5) {
    console.log(`You saved the money for ${daysCount} days.`)
    }

}

vacation (["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"]);