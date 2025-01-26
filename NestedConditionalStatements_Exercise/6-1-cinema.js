function cinema(projectionType, rowCounts, columnCounts) {

    switch(projectionType) {
        case "Premiere":
            console.log(`${(rowCounts * columnCounts * 12.00).toFixed(2)} leva`);
            break;

        case "Normal":
            console.log(`${(rowCounts * columnCounts * 7.50).toFixed(2)} leva`);
            break;

        case "Discount":
            console.log(`${(rowCounts * columnCounts * 5.00).toFixed(2)} leva`);
            break;

        default:
            console.log("error"); break;

    }

}


cinema("Normal",21,13);