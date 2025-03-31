function cake(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);

    let totalPieces = width * length;
    let index = 2;

    while (totalPieces > 0) {
        let pieces = input[index];
        index++;

        if (pieces === 'STOP') {
            console.log(`${totalPieces} pieces are left.`)
            break;
        }

        totalPieces = Number(totalPieces - pieces);
    }


    if (totalPieces < 0) {
        console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
    }  
}

cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);