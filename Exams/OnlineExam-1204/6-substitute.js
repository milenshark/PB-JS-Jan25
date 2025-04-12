function substitute(input) {
    let K = Number(input[0]);
    let L = Number(input[1]);
    let M = Number(input[2]);
    let N = Number(input[3]);
    let counter = 0;

    let firstNumberRange = [];
    let secondNumberRange = [];

    for (let k = K; k <= 8; k++) {
        for (let l = 9; l >= L; l--) {
            firstNumberRange.push([k, l]);
        }
    }

    for (let m = M; m <= 8; m++) {
        for (let n = 9; n >= N; n--) {
            secondNumberRange.push([m, n]);
        }
    }

    for (let i = 0; i < firstNumberRange.length; i++) {
        for (let j = 0; j < secondNumberRange.length; j++) {
            let [k, l] = firstNumberRange[i];
            let [m, n] = secondNumberRange[j];

            if ((k % 2 === 0 && l % 2 === 1) && (m % 2 === 0 && n % 2 === 1)) {
                if (counter === 6) {
                    continue;
                }

                if (k === m && l === n) {
                    console.log("Cannot change the same player.");
                } else {
                    console.log(`${k}${l} - ${m}${n}`);
                    counter++;
                }
            }
        }
    }
}

substitute(["7", "6", "8", "5"]);
