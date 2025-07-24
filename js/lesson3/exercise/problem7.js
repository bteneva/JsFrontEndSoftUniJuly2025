// //    7. NxN Matrix
// Write a function that receives a single integer number n and prints nxn matrix with that number.

function printNxNMatrix(number) {
    for (let i = 0; i < number; i++) {
        let line = '';
        for (let j = 0; j < number; j++) {
            line += number + ' ';
        }
        console.log(line.trim());
    }
}

printNxNMatrix(3)

 