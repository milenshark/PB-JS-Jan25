function sumSeconds(time1, time2, time3) {

    let totalSumSeconds = time1 + time2 + time3;

    let minutes = Math.floor(totalSumSeconds / 60);

    let seconds = totalSumSeconds % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);

    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(35, 45, 44);