// 11.	Магазин за плодове
// Магазин за плодове през работните дни работи на следните цени:
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	2.50	1.20	0.85	1.45	2.70	5.50	3.85
// Събота и неделя магазинът работи на по-високи цени:
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	2.70	1.25	0.90	1.60	3.00	5.60	4.20
// Напишете функция, която получава аргументи: плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), 
// ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) 
// и количество (число) и пресмята цената според цените от таблиците по-горе. 
// Резултатът да се отпечата закръглен с 2 цифри след десетичната точка. 
// При невалиден ден от седмицата или невалидно име на плод да се отпечата "error". 

function fruitShop(fruit, dayOfWeek, quantity) {

    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana":
                    let bananaPrice = 2.50 * quantity;
                    console.log(bananaPrice.toFixed(2)); 
                    break;
                case "apple":
                    let applePrice = 1.20 * quantity;
                    console.log(applePrice.toFixed(2)); 
                    break;
                case "orange":
                    let orangePrice = 0.85 * quantity;
                    console.log(orangePrice.toFixed(2)); 
                    break;
                case "grapefruit":
                    let grapefruitPrice = 1.45 * quantity;
                    console.log(grapefruitPrice.toFixed(2)); 
                    break;
                case "kiwi":
                    let kiwiPrice = 2.70 * quantity;
                    console.log(kiwiPrice.toFixed(2)); 
                    break;
                case "pineapple":
                    let pineapplePrice = 5.50 * quantity;
                    console.log(pineapplePrice.toFixed(2)); 
                    break;
                case "grapes":
                    let grapesPrice = 3.85 * quantity;
                    console.log(grapesPrice.toFixed(2)); 
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        case "Saturday": 
        case "Sunday": 
            switch (fruit) {
                case "banana":
                    let bananaPrice = 2.70 * quantity;
                    console.log(bananaPrice.toFixed(2)); 
                    break;
                case "apple":
                    let applePrice = 1.25 * quantity;
                    console.log(applePrice.toFixed(2)); 
                    break;
                case "orange":
                    let orangePrice = 0.90 * quantity;
                    console.log(orangePrice.toFixed(2)); 
                    break;
                case "grapefruit":
                    let grapefruitPrice = 1.60 * quantity;
                    console.log(grapefruitPrice.toFixed(2)); 
                    break;
                case "kiwi":
                    let kiwiPrice = 3.00 * quantity;
                    console.log(kiwiPrice.toFixed(2)); 
                    break;
                case "pineapple":
                    let pineapplePrice = 5.60 * quantity;
                    console.log(pineapplePrice.toFixed(2)); 
                    break;
                case "grapes":
                    let grapesPrice = 4.20 * quantity;
                    console.log(grapesPrice.toFixed(2)); 
                    break;
                default:
                    console.log("error");
                    break;
                }
                break;
            default: 
                console.log("error");
                break;
         }

     }


fruitShop("orange", "Friday", 0.6);