function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let totalFreeSpace = width * length * height;
    let index = 3;

    while (totalFreeSpace > 0) {
        let package = input[index];
        index++

        if (package === "Done") {
            console.log(`${totalFreeSpace} Cubic meters left.`)
            break;
        }

        totalFreeSpace = totalFreeSpace - package;
    }

    if (totalFreeSpace < 0) {
        console.log(`No more free space! You need ${Math.abs(totalFreeSpace)} Cubic meters more.`);
    }

}

moving(["10", 
    "1",
    "2",
    "4", 
    "6",
    "Done"]);
