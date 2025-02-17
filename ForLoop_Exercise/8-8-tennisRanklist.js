function tennisRanklist(input) {

    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);

    let winningCounter = 0;

    for (let i = 2; i < input.length; i++) {
        let tournamentPosition = input[i];

        switch (tournamentPosition) {
            case "W":
                winningCounter++;
                startingPoints += 2000;
                break;
            case "F":
                startingPoints += 1200;
                break;
            case "SF":
                startingPoints += 720;
                break;
        }
    }

    let averagePoints = ((startingPoints) - (Number(input[1]))) / (tournamentsCount);

    console.log(`Final points: ${startingPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);

    let winningPercent = (winningCounter / tournamentsCount) * 100;

    console.log(`${winningPercent.toFixed(2)}%`);


}

tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);