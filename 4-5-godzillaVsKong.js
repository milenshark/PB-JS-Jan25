
// Известно е, че:
// · Декорът за филма е на стойност 10% от бюджета.
// · При повече от 150 статиста, има отстъпка за облеклото на стойност 10%.

// Вход
// Функцията получава 3 аргумента:
// 1. Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
// 2. Брой на статистите – цяло число в интервала [1 … 500]
// 3. Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]

// Изход
// На конзолата трябва да се отпечатат два реда:
// · Ако парите за декора и дрехите са повече от бюджета:
// o "Not enough money!"
// o "Wingard needs {парите недостигащи за филма} leva more."
// · Ако парите за декора и дрехите са по малко или равни на бюджета:
// o "Action!"
// o "Wingard starts filming with {останалите пари} leva left."

function godzillaVsKong(budged, actorCount, singleCostumePrice){

    let decorPrice = budged * 0.10;
    let totalCostumePrice = actorCount * singleCostumePrice; 

    if (actorCount > 150) {
        totalCostumePrice *= 0.90;
    }

    let expenses = decorPrice + totalCostumePrice;

    if (budged >= expenses) {
        let moneyLeft = budged - expenses;

        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = expenses - budged;

        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }

}

godzillaVsKong(20000, 120, 55.5)