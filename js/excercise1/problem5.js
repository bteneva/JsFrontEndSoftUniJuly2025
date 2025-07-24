//    5. Multiplication Table
// You will receive a number as a parameter. Print the 10 times table for this number. See the examples below for more information.

function multiplicationTable(firstFactor){

    for (secondFactor = 1; secondFactor <=10; secondFactor++){
        console.log(`${firstFactor} X ${secondFactor} = ${firstFactor * secondFactor}`)
    }
}

multiplicationTable(5)