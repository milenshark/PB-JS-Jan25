function trekkingMania(input) {

    let numberOfGroups = Number(input[0]);

    let musalaPeople = 0;
    let monblanPeople = 0;
    let kilimandjaroPeople = 0;
    let k2People = 0;
    let everestPeople = 0;

    let people = 0;
    let allPeople = 0;

    for (let i = 1; i <= numberOfGroups; i++) {
        people = Number(input[i]);

        if (people <= 5) {
            musalaPeople += people;
        } else if (people >= 6 && people <= 12) {
            monblanPeople += people;
        } else if (people >= 13 && people <= 25) {
            kilimandjaroPeople += people;
        } else if (people >= 26 && people <= 40) {
            k2People += people;
        } else {
            everestPeople += people;
        }
    }

    allPeople = musalaPeople + monblanPeople + kilimandjaroPeople + k2People + everestPeople;

    //console.log(allPeople);

    let percent1 = (musalaPeople / allPeople) * 100;
    let percent2 = (monblanPeople / allPeople) * 100;
    let percent3 = (kilimandjaroPeople / allPeople) * 100;
    let percent4 = (k2People / allPeople) * 100;
    let percent5 = (everestPeople / allPeople) * 100;

    console.log(`${percent1.toFixed(2)}%`);
    console.log(`${percent2.toFixed(2)}%`);
    console.log(`${percent3.toFixed(2)}%`);
    console.log(`${percent4.toFixed(2)}%`);
    console.log(`${percent5.toFixed(2)}%`);
}

trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"]);