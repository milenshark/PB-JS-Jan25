function hotelRoom(month, nights){

    let studioPrice;
    let apartmentPrice;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50;
            apartmentPrice = 65;

            if(nights > 14) {
                studioPriceDiscount = studioPrice * 0.30;
                studioPrice = studioPrice - studioPriceDiscount;
            } else if (nights > 7) {
                studioPriceDiscount = studioPrice * 0.05;
                studioPrice = studioPrice - studioPriceDiscount;
            }
            break;


        case "June":
        case "September":
            studioPrice = 75.20;
            apartmentPrice = 68.70;  

            if(nights > 14) {
                studioPriceDiscount = studioPrice * 0.20;
                studioPrice = studioPrice - studioPriceDiscount;
            }
            break;

        case "July":
        case "August":
            studioPrice = 76;
            apartmentPrice = 77;  
            break; 

    }

    if (nights > 14) {
        apartmentPriceDiscount = apartmentPrice * 0.10;
        apartmentPrice = apartmentPrice - apartmentPriceDiscount;
    }

    let apartmentPriceForAllNights = apartmentPrice * nights;
    let studioPriceForAllNights = studioPrice * nights;

    console.log(`Apartment: ${(apartmentPriceForAllNights).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPriceForAllNights).toFixed(2)} lv.`);

}

hotelRoom("August",20);