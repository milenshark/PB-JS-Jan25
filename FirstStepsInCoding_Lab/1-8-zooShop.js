function zooShop(dogFoodQuantity, catFoodQuantity) {
    let dogFoodPrice = dogFoodQuantity * 2.50;
    let catFoodPrice = catFoodQuantity * 4.00;

    let totalPrice = catFoodPrice + dogFoodPrice;

     console.log(`${totalPrice} lv.`);
}

zooShop(13, 9);