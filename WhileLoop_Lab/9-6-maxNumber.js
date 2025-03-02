function maxNumber(input) {

    let number = 0;
    let index = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;

    number = input[index];

    while (index < input.length) {
        number = input[index];

        if (number !== "Stop") { 
            number = Number(input[index]);
        } 


        if (number > maxNum) {
            maxNum = number;
        }

        index++

        
        if (number == "Stop") {
            console.log(maxNum);

        }
    }


}




maxNumber(["-1",
    "-2",
    "Stop"]);
    
    
    