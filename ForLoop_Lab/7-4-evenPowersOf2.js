function evenPowersOf2(n) {

    let num = 1;
    for (let i = 0; i <= n; i += 2) { // i = 0; 0 < 7 --> 1 ; num = 1 * 2 * 2 = 4 //
        console.log(num); //4  -> num = 4 * 2 * 2 = 16 // i = 4 // print 16 // num = 16 * 2 * 2 = 64
        num = num * 2 * 2;  // 6 // print num = 64 // num = 64 * 2 * 2 = 256 // i = 6 + 2 = 8
    }
}

evenPowersOf2(7)