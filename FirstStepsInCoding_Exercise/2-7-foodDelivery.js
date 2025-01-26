function foodDelivery(chickenMenus, fishMenus, vegetarianMenus){

    let chickenMenuPrice = chickenMenus * 10.35;
    let fishMenuPrice = fishMenus * 12.40;
    let vegetarianMenuPrice = vegetarianMenus * 8.15;
    let totalMenuPrice = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;

    let dessertPrice = totalMenuPrice * 20 / 100;
    let deliveryPrice = 2.50;

    let totalPrice = totalMenuPrice + dessertPrice + deliveryPrice;

    console.log(totalPrice);
}

foodDelivery(2, 4, 3);