function basketballEquipment(yearTax){

    let sneakers = yearTax - (yearTax * 40 / 100);
    let outfit = sneakers - (sneakers * 20 / 100);
    let basketballBall = outfit / 4;
    let accessories = basketballBall / 5;

    let totalPrice = yearTax + sneakers + outfit + basketballBall + accessories;

    console.log(totalPrice);
}

basketballEquipment(550)