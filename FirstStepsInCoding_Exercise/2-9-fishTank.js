function fishTank(length, width, height, percent){

    let volume = (length * width * height) / 1000;
    let sandPercentage = volume * percent / 100;

    let totalWater = volume - sandPercentage;

    console.log(totalWater);
}

fishTank(105, 77, 89, 18.5);