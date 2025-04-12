function onTimeForTheExam(examHour, examMinute, arrivalHour, arrivalMinute) {
    // Преобразуваме часовете и минутите в минути от началото на деня
    const examTime = examHour * 60 + examMinute;
    const arrivalTime = arrivalHour * 60 + arrivalMinute;

    const diff = arrivalTime - examTime;

    if (diff > 0) {
        console.log("Late");
        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else {
            const hours = Math.floor(diff / 60);
            const minutes = diff % 60;
            console.log(`${hours}:${minutes.toString().padStart(2, "0")} hours after the start`);
        }
    } else if (diff >= -30) {
        console.log("On time");
        if (diff !== 0) {
            console.log(`${Math.abs(diff)} minutes before the start`);
        }
    } else {
        console.log("Early");
        const absDiff = Math.abs(diff);
        if (absDiff < 60) {
            console.log(`${absDiff} minutes before the start`);
        } else {
            const hours = Math.floor(absDiff / 60);
            const minutes = absDiff % 60;
            console.log(`${hours}:${minutes.toString().padStart(2, "0")} hours before the start`);
        }
    }
}


onTimeForTheExam(9,0,10,30);