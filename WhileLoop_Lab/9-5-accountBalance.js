function accountBalance(input) {

    let moneyAdded = Number(input[0]).toFixed(2);
    let index = 0;
    let accBalance = 0;

    moneyAdded = input[index];

    while (input[index] !== "NoMoreMoney") {
       
        moneyAdded = Number(input[index]);

        if (moneyAdded < 0) {
            console.log("Invalid operation!");
            console.log(`Total: ${accBalance.toFixed(2)}`);
            break;
        }

        accBalance = Number(accBalance) + Number(moneyAdded);
        console.log(`Increase: ${moneyAdded.toFixed(2)}`);
        index++;
    }

    if (moneyAdded > 0 || moneyAdded == "NoMoreMoney") {
        console.log(`Total: ${accBalance.toFixed(2)}`);
    }

}

accountBalance(["120",
    "45.55",
    "-150"]);
    
    
    
