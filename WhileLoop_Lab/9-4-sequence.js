function sequence(n) {

    let counter = 1;

    while (counter <= n) {
        console.log(counter);
        counter = (counter * 2) + 1; 
    }

}

sequence(8);