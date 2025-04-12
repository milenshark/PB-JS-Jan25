function santaHoliday(days, roomType, evaluation) {
    
    let pricePerNight = 0;
    let discount = 0;

    if (roomType === "room for one person") {
        pricePerNight = 18.00;
    } else if (roomType === "apartment") {
        pricePerNight = 25.00;
    } else if (roomType === "president apartment") {
        pricePerNight = 35.00;
    }

    let nights = days - 1; 

    if (roomType === "apartment") {
        if (nights < 10) {
            discount = 0.30;
        } else if (nights >= 10 && nights <= 15) {
            discount = 0.35;
        } else {
            discount = 0.50;
        }
    } else if (roomType === "president apartment") {
        if (nights < 10) {
            discount = 0.10;
        } else if (nights >= 10 && nights <= 15) {
            discount = 0.15;
        } else {
            discount = 0.20;
        }
    }

    let price = nights * pricePerNight;
    price -= price * discount;

    if (evaluation === "positive") {
        price += price * 0.25;
    } else if (evaluation === "negative") {
        price -= price * 0.10;
    }

    console.log(price.toFixed(2));
}


santaHoliday(14, "apartment", "positive");