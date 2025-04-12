function excursion(people, nights, transportCards, museumTickets){

let costPerPerson = (nights * 20) + (transportCards * 1.60) + (museumTickets * 6);
let totalCost = costPerPerson * people;
let finalCost = totalCost * 1.25;

console.log(finalCost.toFixed(2));
}

excursion(20, 14, 30, 6)

