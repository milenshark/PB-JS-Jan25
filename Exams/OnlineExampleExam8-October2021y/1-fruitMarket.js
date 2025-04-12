function fruitMarket(input) {
    let strawberryPrice = Number(input[0]);
    let bananasKg = Number(input[1]);
    let orangesKg = Number(input[2]);
    let raspberriesKg = Number(input[3]);
    let strawberriesKg = Number(input[4]);

    let raspberryPrice = strawberryPrice / 2;
    let orangePrice = raspberryPrice * 0.6; // 40% по-ниска = 60% от цената
    let bananaPrice = raspberryPrice * 0.2; // 80% по-ниска = 20% от цената

    let total = (strawberriesKg * strawberryPrice) +
                (raspberriesKg * raspberryPrice) +
                (orangesKg * orangePrice) +
                (bananasKg * bananaPrice);

    console.log(total.toFixed(2));
}


fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);