function fruitMarket(strawberryPrice, bananaKg, orangeKg, raspberryKg, strawberryKg) {
    let raspberryPrice = strawberryPrice / 2;
    let orangePrice = raspberryPrice * 0.6;
    let bananaPrice = raspberryPrice * 0.2;

    let total =
        (strawberryKg * strawberryPrice) +
        (raspberryKg * raspberryPrice) +
        (orangeKg * orangePrice) +
        (bananaKg * bananaPrice);

    console.log(total.toFixed(2));
}

fruitMarket(48,
    10,
    3.3,
    6.5,
    1.7,
    );