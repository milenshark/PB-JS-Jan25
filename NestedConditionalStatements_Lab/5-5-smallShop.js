function smallShop(product, town, quantity){
    



switch (product) {
    case "coffee":
        if (town == "Sofia"){
            console.log(quantity*0.50);
        } else if (town == "Plovdiv") {
            console.log(quantity*0.40);
        } else if (town == "Varna") {
            console.log(quantity*0.45);
        }
        break;
    case "water":
        if (town == "Sofia"){
            console.log(quantity*0.80);
        } else if (town == "Plovdiv") {
            console.log(quantity*0.70);
        } else if (town == "Varna") {
            console.log(quantity*0.70);
        }
        break;
    case "beer":
        if (town == "Sofia"){
            console.log(quantity*1.20);
        } else if (town == "Plovdiv") {
            console.log(quantity*1.15);
        } else if (town == "Varna") {
            console.log(quantity*1.10);
        }
        break;
    case "sweets":
        if (town == "Sofia"){
            console.log(quantity*1.45);
        } else if (town == "Plovdiv") {
            console.log(quantity*1.30);
        } else if (town == "Varna") {
            console.log(quantity*1.35);
        }
        break;
    case "peanuts":
        if (town == "Sofia"){
            console.log(quantity*1.60);
        } else if (town == "Plovdiv") {
            console.log(quantity*1.50);
        } else if (town == "Varna") {
            console.log(quantity*1.55);
        }
        break;
    default:
        console.log("Error");
        break;
    }
}


smallShop("peanuts", "Plovdiv", 1);