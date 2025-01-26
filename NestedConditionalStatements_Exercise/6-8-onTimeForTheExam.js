function onTimeForTheExam(hourToExam, minuteToExam, arrivalHour, arrivalMinute) {


    let totalExamMinutes = (hourToExam * 60) + minuteToExam;
    let totalArrivalMinutes = (arrivalHour * 60) + arrivalMinute;

    switch (true) {
        //case (hourToExam == arrivalHour && minuteToExam == arrivalMinute):
        case (totalExamMinutes < totalArrivalMinutes):
            let difference = totalArrivalMinutes - totalExamMinutes;

            let diffHour = difference / 60;
            let diffMinutes = difference % 60;
            //let diffMinutes2 = (diffMinutes*60) / 100;
            // if (difference >= 60) {

            // }

            console.log("Late" );
            console.log(`${Math.floor(diffHour).toFixed(0)}:${diffMinutes} hours after the start`)



    }
}


onTimeForTheExam(9,0,10,30);