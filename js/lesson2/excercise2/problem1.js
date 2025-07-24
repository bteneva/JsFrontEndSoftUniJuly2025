//    1. Array Rotation
// Write a function that receives an array and the number of rotations you have to perform. 
// Note: For each rotation, the first element goes to the end.

function arrayRotation (arr, rotationCount){

    for (let currentRotation = 1; currentRotation <=rotationCount; currentRotation++){
        let firstElement = arr.shift()
        arr.push(firstElement)
    }

    console.log(arr.join(` `))


}

arrayRotation([51, 47, 32, 61, 21], 2)