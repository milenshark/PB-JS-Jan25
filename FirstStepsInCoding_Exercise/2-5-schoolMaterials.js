function schoolMaterials(penPackages, markerBoxes, deskCleaners, discount) {

    let penPrice = penPackages * 5.80;
    let markerPrice = markerBoxes * 7.20;
    let cleanerPrice = deskCleaners * 1.20;

    let totalPriceWithoutDiscount = penPrice + markerPrice + cleanerPrice;
    let discountPrice = (totalPriceWithoutDiscount * discount/100);

    let totalPriceWithDiscount = totalPriceWithoutDiscount - discountPrice;

    console.log(totalPriceWithDiscount);
}

schoolMaterials(2, 3, 4, 25)
