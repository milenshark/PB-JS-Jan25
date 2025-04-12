function skiTrip(days, roomType, grade) {
    const nights = days - 1;
    let pricePerNight = 0;
    let discount = 0;

    switch (roomType) {
        case "room for one person":
            pricePerNight = 18.00;
            break;
        case "apartment":
            pricePerNight = 25.00;
            if (days < 10) {
                discount = 0.30;
            } else if (days <= 15) {
                discount = 0.35;
            } else {
                discount = 0.50;
            }
            break;
        case "president apartment":
            pricePerNight = 35.00;
            if (days < 10) {
                discount = 0.10;
            } else if (days <= 15) {
                discount = 0.15;
            } else {
                discount = 0.20;
            }
            break;
    }

    let total = nights * pricePerNight;
    total -= total * discount;

    if (grade === "positive") {
        total += total * 0.25;
    } else if (grade === "negative") {
        total -= total * 0.10;
    }

    console.log(total.toFixed(2));
}


skiTrip(14,
    "apartment",
    "positive"
    );