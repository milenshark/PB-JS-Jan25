// Град	0 ≤ s ≤ 500	500 < s ≤ 1 000	1 000 < s ≤ 10 000	s > 10 000
// Sofia	5%	        7%	            8%	                  12%
// Varna	4.5%	7.5%	10%	13%
// Plovdiv	5.5%	8%	12%	14.5%


function tradeCommissions(cityName, sales) {

    switch(cityName) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                console.log((sales * 0.05).toFixed(2));
            }
            else if (sales > 500 && sales <= 1000) {
                console.log((sales * 0.07).toFixed(2));
            }
            else if (sales > 1000 && sales <= 10000) {
                console.log((sales * 0.08).toFixed(2));
            }
            else if (sales > 10000) {
                console.log((sales * 0.12).toFixed(2));
            }
            else {
                console.log("error")
            }
            break;

        case "Varna":
            if (sales >= 0 && sales <= 500) {
                console.log((sales * 0.045).toFixed(2));
            }
            else if (sales > 500 && sales <= 1000) {
                console.log((sales * 0.075).toFixed(2));
            }
            else if (sales > 1000 && sales <= 10000) {
                console.log((sales * 0.10).toFixed(2));
            }
            else if (sales > 10000) {
                console.log((sales * 0.13).toFixed(2));
            }
            else {
                console.log("error")
            }
            break;

        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                console.log((sales * 0.055).toFixed(2));
            }
            else if (sales > 500 && sales <= 1000) {
                console.log((sales * 0.08).toFixed(2));
            }
            else if (sales > 1000 && sales <= 10000) {
                console.log((sales * 0.12).toFixed(2));
            }
            else if (sales > 10000) {
                console.log((sales * 0.145).toFixed(2));
            }
            else {
                console.log("error")
            }
            break;
        default:
            console.log("error"); break;

    }

}


tradeCommissions("Varna", 3874.50);
