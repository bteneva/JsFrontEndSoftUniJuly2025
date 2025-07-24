// //    1. Smallest of Three Numbers
// Write a function that receives three integers and prints the smallest number. Use an appropriate name for the function.

function printTheSmallestFromThreeInts(num1, num2, num3){
    console.log(findTheSmallestFromThreeInts(num1, num2, num3))
    function findTheSmallestFromThreeInts(num1, num2, num3){
    return Math.min(num1, num2, num3)
    }

}


printTheSmallestFromThreeInts(2,5,3)

printTheSmallestFromThreeInts(600, 342, 123)