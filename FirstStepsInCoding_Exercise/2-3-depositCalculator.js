function depositCalculator(depositAmount, numberOfMonths, interestPercent) {
    let interestSum = depositAmount * (interestPercent / 100);
    let monthlySum = interestSum / 12;
    let totalSum = depositAmount  + numberOfMonths * (monthlySum);
    console.log(totalSum);
}

depositCalculator(200, 3, 5.7)