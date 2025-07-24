//    2. Reverse an Array of Numbers
// Write a program, which receives a number n and an array of elements. 
// Your task is to create a new array with n numbers from the original array, reverse it and print its elements on a single line, space-separated.

function reverseAndPrint(n, arr) {
    let result = [];

    for (let i = 0; i < n; i++) {
        if (i < arr.length) {
            result.push(arr[i]);
        } else {
            result.push(0); // допълване с 0
        }
    }

    result.reverse();
    console.log(result.join(' '));
}
}

reverceArray(3, [10, 20, 30, 40, 50])

reverceArray(5, [99, 20, -1])