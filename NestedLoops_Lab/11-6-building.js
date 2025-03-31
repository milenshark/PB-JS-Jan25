function building(numberOfFloors, numberOfRooms) {

    for (let i = numberOfFloors; i >= 1; i--) {
        let printLine = "";
        for (let j = 0; j < numberOfRooms; j++) {
            if (i === numberOfFloors) {
                printLine += `L${i}${j} `;
            }

            if (i % 2 != 0 && i !== numberOfFloors) {
                printLine += `A${i}${j} `;
            } 

            if (i % 2 == 0 && i !== numberOfFloors) {
                printLine += `O${i}${j} `;
            }
        }
        console.log(printLine);
    }
}

building(9, 5);