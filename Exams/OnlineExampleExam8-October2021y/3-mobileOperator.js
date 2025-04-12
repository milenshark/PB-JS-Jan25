function mobileOperator(contractLength, contractType, mobileInternet, months) {
    let pricePerMonth;

    // В зависимост от срока на договора и типа на договора
    if (contractLength === "one") {
        if (contractType === "Small") {
            pricePerMonth = 9.98;
        } else if (contractType === "Middle") {
            pricePerMonth = 18.99;
        } else if (contractType === "Large") {
            pricePerMonth = 25.98;
        } else if (contractType === "ExtraLarge") {
            pricePerMonth = 35.99;
        }
    } else if (contractLength === "two") {
        if (contractType === "Small") {
            pricePerMonth = 8.58;
        } else if (contractType === "Middle") {
            pricePerMonth = 17.09;
        } else if (contractType === "Large") {
            pricePerMonth = 23.59;
        } else if (contractType === "ExtraLarge") {
            pricePerMonth = 31.79;
        }
    }

    // Ако има добавен мобилен интернет, добавяме таксата
    if (mobileInternet === "yes") {
        if (pricePerMonth <= 10) {
            pricePerMonth += 5.50;
        } else if (pricePerMonth <= 30) {
            pricePerMonth += 4.35;
        } else {
            pricePerMonth += 3.85;
        }
    }

    // Ако договорът е за две години, намаляваме с 3.75%
    if (contractLength === "two") {
        pricePerMonth *= 0.9625;
    }

    // Изчисляваме крайната сума
    let totalAmount = pricePerMonth * months;

    // Форматираме и отпечатваме резултата
    console.log(`${totalAmount.toFixed(2)} lv.`);
}

mobileOperator("one", "Small", "yes", 10);