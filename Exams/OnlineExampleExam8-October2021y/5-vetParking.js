function vetParking(days, hours) {
    let totalCost = 0;
    
    for (let day = 1; day <= days; day++) {
      let dailyCost = 0;
      
      for (let hour = 1; hour <= hours; hour++) {
        if (day % 2 === 0 && hour % 2 !== 0) {
          dailyCost += 2.50;
        } else if (day % 2 !== 0 && hour % 2 === 0) {
          dailyCost += 1.25;
        } else {
          dailyCost += 1.00;
        }
      }
      
      console.log(`Day: ${day} - ${dailyCost.toFixed(2)} leva`);
      totalCost += dailyCost;
    }
  
    console.log(`Total: ${totalCost.toFixed(2)} leva`);
  }

  vetParking(2, 5);
  