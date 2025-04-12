function substitute(K, L, M, N) {
    let counter = 0;
    for (let k = K; k <= 8; k++) {
        for (let l = 9; l >= L; l--) {
            for (let m = M; m <= 8; m++) {
                for (let n = 9; n >= N; n--) {
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
    }
}


substitute(7, 6, 8, 5);
