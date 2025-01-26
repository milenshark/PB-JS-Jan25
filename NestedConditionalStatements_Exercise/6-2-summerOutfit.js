function summerOutfit(degrees, dayTime) {

    switch(dayTime) {
        case "Morning":
            if (degrees >= 10 && degrees <= 18) {
                let outfit = "Sweatshirt";
                let shoes = "Sneakers";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
            } else if (degrees > 18 && degrees <= 24) {
                let outfit = "Shirt";
                let shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
            } else if (degrees >= 25) {
                let outfit = "T-Shirt";
                let shoes = "Sandals";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
            } else {
                //
            }
            break;
        case "Afternoon":
            if (degrees >= 10 && degrees <= 18) {
                let outfit = "Shirt";
                let shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
            } else if (degrees > 18 && degrees <= 24) {
                let outfit = "T-Shirt";
                let shoes = "Sandals";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
            } else if (degrees >= 25) {
                let outfit = "Swim Suit";
                let shoes = "Barefoot";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
            } else {
                //
            }
            break;
        case "Evening":
            if (degrees >= 10 && degrees <= 18) {
                let outfit = "Shirt";
                let shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
            } else if (degrees > 18 && degrees <= 24) {
                let outfit = "Shirt";
                let shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
            } else if (degrees >= 25) {
                let outfit = "Shirt";
                let shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
            } else {
                //
            }
            break;
        default:
            console.log("error");
            break;

    }

}

summerOutfit(22,"Afternoon");