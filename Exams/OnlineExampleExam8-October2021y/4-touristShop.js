function touristShop(input) {
    let budget = parseFloat(input[0]); // Бюджетът
    let totalSpent = 0;
    let productCount = 0;
    let productIndex = 1;
    let i = 1;

    while (i < input.length) {
        let productName = input[i]; // Името на продукта
        let productPrice = parseFloat(input[i + 1]); // Цена на продукта

        if (productName === "Stop") {
            break;
        }

        // Всеки трети продукт е на половин цена
        if (productIndex % 3 === 0) {
            productPrice /= 2; // Наполовина
        }

        // Проверка дали има достатъчно пари
        if (budget >= productPrice) {
            budget -= productPrice;
            totalSpent += productPrice;
            productCount++;
            productIndex++;
        } else {
            console.log("You don't have enough money!");
            console.log(`You need ${(productPrice - budget).toFixed(2)} leva!`);
            return;
        }

        i += 2; // Преминаваме към следващия продукт
    }

    console.log(`You bought ${productCount} products for ${totalSpent.toFixed(2)} leva.`);
}


touristShop(["153.20",
    "Backpack",
    "25.20",
    "Shoes",
    "54",
    "Sunglasses",
    "30 ",
    "Stop"]);
    