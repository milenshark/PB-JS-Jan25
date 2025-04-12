function worldSwimmingRecord(recordInSeconds, distanceInMeters, timePerMeter) {
    const baseTime = distanceInMeters * timePerMeter;
    const slowdowns = Math.floor(distanceInMeters / 15);
    const addedTime = slowdowns * 12.5;
    const totalTime = baseTime + addedTime;

    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        const difference = totalTime - recordInSeconds;
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
}


worldSwimmingRecord(10464,
    1500,
    20
    );