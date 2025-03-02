function minNumber(input) {

    let number = 0;
    let index = 0;
    let minNum = Number.MAX_SAFE_INTEGER;

    number = input[index];

    while (index < input.length) {
        number = input[index];

        if (number !== "Stop") { 
            number = Number(input[index]);
        } 


        if (number < minNum) {
            minNum = number;
        }

        index++
        
        if (number == "Stop") {
            console.log(minNum);

        }
    }
}

minNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"]);
    
    
    
    