function bestPlayer(input) {
    let bestPlayer = '';
    let maxGoals = 0;
    let bestHatTrick = false;
    let i = 0;

    while (i < input.length) {
        let player = input[i];  
        if (player === "END") break; 
        let goals = Number(input[i + 1]);


        if (goals > maxGoals) {
            bestPlayer = player;
            maxGoals = goals;
            bestHatTrick = goals >= 3;  
        }


        if (goals >= 10) {
            break;
        }

        i += 2; 
    }

    console.log(`${bestPlayer} is the best player!`);
    if (bestHatTrick) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }
}


bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
