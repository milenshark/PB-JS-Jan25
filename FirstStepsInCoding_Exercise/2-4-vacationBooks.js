function vacationBooks(sheetsCount, pagesPerHour, dayCounts) {
    
    let totalBookHours = sheetsCount / pagesPerHour;
    let hoursNeeded = totalBookHours / dayCounts;

    console.log(hoursNeeded);
}

vacationBooks(100, 10, 10);
