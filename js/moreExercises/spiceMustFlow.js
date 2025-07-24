

function spiceTotalAmountCalculation(startingYield){
    let daysCount = 0
    let yeald = 0
    while (startingYield >= 100) {

        yeald += startingYield - 26
        startingYield -=10
        daysCount ++
    }
    yeald -= 26
    if (yeald < 0) {
        yeald = 0
    }

    console.log(daysCount)
    console.log(yeald)

}

spiceTotalAmountCalculation(111)
spiceTotalAmountCalculation(450)
spiceTotalAmountCalculation(0)