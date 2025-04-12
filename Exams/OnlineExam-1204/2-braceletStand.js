function braceletStand(pocketMoneyPerDay, moneyFromSalesPerDay, expenses, giftPrice) {

    let totalPocketMoney = 5 * pocketMoneyPerDay; 
    let totalMoneyFromSales = 5 * moneyFromSalesPerDay; 
    let totalMoney = totalPocketMoney + totalMoneyFromSales - expenses; 

    if (totalMoney >= giftPrice) {
        console.log(`Profit: ${totalMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        let insufficientMoney = (giftPrice - totalMoney).toFixed(2);
        console.log(`Insufficient money: ${insufficientMoney} BGN.`);
    }
}

braceletStand(5.12, 32.05, 15, 150);