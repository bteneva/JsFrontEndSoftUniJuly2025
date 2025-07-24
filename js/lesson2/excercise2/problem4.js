//    4. Sorting Numbers
// Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on. 
// Return the resulting array.


function sortingNumbers(arr){
    let sortedArr = []

    let sorted = [...arr].sort((a, b) => a - b);

    while (sorted.length > 0){
        sortedArr.push(sorted.shift())
        if (sorted.length > 0){
            sortedArr.push(sorted.pop())
        }
    }
    return sortedArr
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])