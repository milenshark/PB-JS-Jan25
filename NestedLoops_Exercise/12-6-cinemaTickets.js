function cinemaTickets(input) {
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    let index = 0;
    let currentInput = input[index];
    index++;

    while (currentInput !== "Finish") {
        let movieName = currentInput;
        let availableSeats = Number(input[index]);
        index++;

        let soldTickets = 0;
        let studentCount = 0;
        let standardCount = 0;
        let kidCount = 0;

        while (soldTickets < availableSeats) {
            let ticketType = input[index];
            index++;

            if (ticketType === "End") {
                break;
            }

            soldTickets++;

            if (ticketType === "student") {
                studentCount++;
                studentTickets++;
            } else if (ticketType === "standard") {
                standardCount++;
                standardTickets++;
            } else if (ticketType === "kid") {
                kidCount++;
                kidTickets++;
            }
        }

        let fullPercentage = (soldTickets / availableSeats) * 100;
        console.log(`${movieName} - ${fullPercentage.toFixed(2)}% full.`);

        currentInput = input[index];
        index++;
    }

    let totalSoldTickets = studentTickets + standardTickets + kidTickets;

    console.log(`Total tickets: ${totalSoldTickets}`);
    console.log(`${((studentTickets / totalSoldTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / totalSoldTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / totalSoldTickets) * 100).toFixed(2)}% kids tickets.`);
}

// Пример на вход
cinemaTickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
]);