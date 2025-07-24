//Write a function that receives an array of numbers and prints the sum of the first and last element in that array.

function sumFirstLastElement(arr){
    let firstElement = arr.shift()
    let lastElement = arr.pop()

    let sum = firstElement + lastElement
    console.log(sum)
}

sumFirstLastElement([20, 30, 40])