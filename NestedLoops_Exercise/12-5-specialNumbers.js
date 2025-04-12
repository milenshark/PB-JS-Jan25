function specialNumbers(input) {
    let n = Number(input);
    let result = "";

    for (let i = 1111; i <= 9999; i++) {
        let currentNum = i.toString();
        let isSpecial = true;

        for (let j = 0; j < 4; j++) {
            let digit = Number(currentNum[j]);

            if (digit === 0 || n % digit !== 0) {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            result += currentNum + " ";
        }
    }

    console.log(result);
}

specialNumbers("11");