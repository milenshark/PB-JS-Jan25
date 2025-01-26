function journey(budget, season){
    let destination;
    let spending = 0;
    let type;

    switch (true){
        case budget <= 100:
            destination = "Bulgaria";
            if (season == "summer") {
                spending = budget * 0.30;
                type = "Camp"
            } else {
                spending = budget * 0.70;
                type = "Hotel"
            }
            break;

        case budget <= 1000:
            destination = "Balkans";
            if (season == "summer") {
                spending = budget * 0.40;
                type = "Camp"
            } else {
                spending = budget * 0.80;
                type = "Hotel"
            }
            break;

        case budget > 1000:
            destination = "Europe";
            spending = budget * 0.90;
            type = "Hotel";
            break;


    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${(spending).toFixed(2)}`);

}

journey(1500, "summer");
