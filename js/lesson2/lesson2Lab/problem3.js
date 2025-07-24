//    3. Even and Odd Subtraction
// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

function sumEvenOddNums (arr){

    let sumEven = 0
    let sumOdd = 0

    for (const num of arr) {

        if (num % 2 === 0){
            sumEven +=num
        }
        else {
            sumOdd +=num
        }
        
    }
    console.log(sumEven - sumOdd)

}

sumEvenOddNums([1,2,3,4,5,6])