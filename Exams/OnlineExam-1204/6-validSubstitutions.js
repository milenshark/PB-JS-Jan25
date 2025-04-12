function substitutions(K, L, M, N) {
    console.log("Функцията стартира"); // Лог за началото на функцията
    let validChanges = 0;

    // Възможни комбинации за номерата
    for (let firstDigit = K; firstDigit <= 8; firstDigit++) {
        console.log(`Обработваме първата цифра: ${firstDigit}`);
        for (let secondDigit = 9; secondDigit <= L; secondDigit++) {
            console.log(`Обработваме втората цифра: ${secondDigit}`);
            for (let thirdDigit = M; thirdDigit <= 8; thirdDigit++) {
                console.log(`Обработваме третата цифра: ${thirdDigit}`);
                for (let fourthDigit = 9; fourthDigit <= N; fourthDigit++) {
                    console.log(`Обработваме четвъртата цифра: ${fourthDigit}`);

                    // Проверка дали цифрите отговарят на условията
                    let isFirstValid = firstDigit % 2 === 0 && secondDigit % 2 !== 0;
                    let isSecondValid = thirdDigit % 2 === 0 && fourthDigit % 2 !== 0;

                    console.log(`Първият номер е ${firstDigit}${secondDigit} - четен: ${isFirstValid ? 'Да' : 'Не'}`);
                    console.log(`Вторият номер е ${thirdDigit}${fourthDigit} - четен: ${isSecondValid ? 'Да' : 'Не'}`);

                    if (isFirstValid && isSecondValid) {
                        console.log("Номерата са валидни за проверка");

                        // Проверяваме дали номерът не е същият
                        if (firstDigit === thirdDigit && secondDigit === fourthDigit) {
                            console.log("Cannot change the same player.");
                        } else {
                            // Печатаме валидната смяна
                            console.log(`${firstDigit}${secondDigit} - ${thirdDigit}${fourthDigit}`);
                        }

                        validChanges++;

                        // Ако сме намерили 6 валидни смени, прекратяваме
                        if (validChanges === 6) {
                            console.log("Намерени са 6 валидни смени, прекратяваме.");
                            return;
                        }
                    } else {
                        console.log("Номерата не отговарят на условията");
                    }
                }
            }
        }
    }

    if (validChanges === 0) {
        console.log("Не са намерени валидни смени.");
    }
}

// Пример за извикване на функцията с входните данни
substitutions(6, 7, 5, 6);
