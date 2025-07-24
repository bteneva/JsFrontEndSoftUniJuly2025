// //    2. Add and Subtract
// You will receive three integer numbers. 
// Write a function sum() to calculate the sum of the first two integers and a function subtract(),
//  which subtracts the result of the function the sum() and the third integer.

function sumFirstTwoIntsSubtractTheThird(int1, int2, int3){
    function sumFirstTwo(int1, int2){
        return int1 + int2;
    }

    return sumFirstTwo(int1, int2) - int3
}

console.log(sumFirstTwoIntsSubtractTheThird(1,17,30))