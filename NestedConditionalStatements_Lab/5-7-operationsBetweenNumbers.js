function openrationsBetweenNumbers(num1, num2, operator){

    let result;
    let remainings;

    switch(operator) {
        case "+" :
            result = num1 + num2;

            if (result % 2 == 0)
            {
                console.log(`${num1} ${operator} ${num2} = ${result} - even`);
            } else {
                console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
            }
            break;

        case "-" :
            result = num1 - num2;

            if (result % 2 == 0)
            {
                console.log(`${num1} ${operator} ${num2} = ${result} - even`);
            } else {
                console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
            }
            break;

        case "*" :
            result = num1 * num2;

            if (result % 2 == 0)
            {
                console.log(`${num1} ${operator} ${num2} = ${result} - even`);
            } else {
                console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
            }
            break;

        case "/" :
            result = num1 / num2;

            if (num2 != 0)
            {
                console.log(`${num1} ${operator} ${num2} = ${(result).toFixed(2)}`);
            } else {
                console.log(`Cannot divide ${num1} by zero`);
            }
            break;

        case "%" :
            result = num1 % num2;
            if (num2 != 0) {
                console.log(`${num1} % ${num2} = ${result}`);
            } else {
                console.log(`Cannot divide ${num1} by zero`);
            }
                

            break;

    }
}


openrationsBetweenNumbers(10,0,"%");