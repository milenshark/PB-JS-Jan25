function salary(text) {

    //let tabsCount = text[0];
    let payment = text[1];

    for (let i = 2; i <= text.length; i++) {
        switch (text[i]) {
        case "Facebook":
            payment = payment - 150;
            break;
        case "Instagram":
            payment = payment - 100;
            break;
        case "Reddit":
            payment = payment - 50;
            break;
        default: 
        payment = payment;
        break;
        }
    }

    if(payment > 0) {
        console.log(payment);
    } else {
        console.log("You have lost your salary.")
    }

}

salary(["3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"])
    
    