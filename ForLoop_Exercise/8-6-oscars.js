function oscars(input) {

    let actorName = input[0];
    let score = input[1];
    let finalScore = 0;


    for (let i = 3; i < input.length; i += 2) {
        let nameofJudge = input[i];   //"Johnny Depp"; //i.length;
        let judgeScore = input[i + 1];
        score = (Number(score) + ((Number(nameofJudge.length) * Number(judgeScore)) / 2));
        //finalScore += score;

        if(score > 1250.5) {
            break;
        }

    }

    let totalScore = Number(score); // + Number(initialpoints);

    if (totalScore.toFixed(1) < 1250.5) {
        let scoreNeeded = 1250.5 - totalScore;
        console.log(`Sorry, ${actorName} you need ${scoreNeeded.toFixed(1)} more!`)
    } else {    
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalScore.toFixed(1)}!`)
    }

}

oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"]);