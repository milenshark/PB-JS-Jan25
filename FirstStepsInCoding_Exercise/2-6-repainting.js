function repainting(nylonQuantity, paintQuantity, thinner, hours){

    let nylonPrice = (nylonQuantity + 2) * 1.50;
    let paintPrice = (paintQuantity + (paintQuantity * 10 / 100)) * 14.50;
    let thinnerPrice = thinner * 5.00;
    let bagsPrice = 0.40;

    let totalPrice = nylonPrice + paintPrice + thinnerPrice + bagsPrice;
    //let mastersPrice = (totalPrice + (totalPrice * 30 / 100)) * hours;
    let mastersPrice = (totalPrice * 30 / 100) * hours;

    let grandTotalPrice = totalPrice + mastersPrice;

    console.log(grandTotalPrice);
}

repainting(5, 10, 10, 1);