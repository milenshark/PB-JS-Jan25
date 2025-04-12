function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (command !== "stop") {
        let number = Number(command);

        if (number < 0) {
            console.log("Number is negative.");
        } else {
            let isPrime = true;

            if (number === 1) {
                isPrime = false;
            } else {
                for (let i = 2; i <= Math.sqrt(number); i++) {
                    if (number % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
            }

            if (isPrime) {
                primeSum += number;
            } else {
                nonPrimeSum += number;
            }
        }

        index++;
        command = input[index];
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);