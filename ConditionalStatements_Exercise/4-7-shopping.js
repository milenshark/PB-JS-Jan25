function shopping(budget, videoCards, processors, ramSticks) {
    const videoCardPrice = 250;
    const totalVideoCardPrice = videoCards * videoCardPrice;

    const processorPrice = totalVideoCardPrice * 0.35;
    const totalProcessorPrice = processors * processorPrice;

    const ramPrice = totalVideoCardPrice * 0.10;
    const totalRamPrice = ramSticks * ramPrice;

    let totalPrice = totalVideoCardPrice + totalProcessorPrice + totalRamPrice;

    if (videoCards > processors) {
        totalPrice *= 0.85; // 15% discount
    }

    const diff = Math.abs(budget - totalPrice);

    if (budget >= totalPrice) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
}


shopping(900, 2, 1, 3); // You have 198.75 leva left!