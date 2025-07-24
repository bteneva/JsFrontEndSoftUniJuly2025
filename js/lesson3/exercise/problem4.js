// //    4. Odd and Even Sum
// You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits
//  from that number. 

function sumOfAllEvenAndAllOddDigitsFromANumver(number){
    //make a string from the number

    let numAsString = number.toString();
    let sumEven = 0;
    let sumOdd = 0;

    //make a loop and all charackters - to numbers and check if they are even or odd

    for (let char of numAsString){
        let digit = Number(char);
    //if even - to sum of even
    //iff odd - to sum of odd
        if (digit% 2===0){
            sumEven +=digit
        }
        else {
            sumOdd +=digit
        }
    }
    //return the sum of the two sums
    return console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)

}

sumOfAllEvenAndAllOddDigitsFromANumver(3495892137259234)