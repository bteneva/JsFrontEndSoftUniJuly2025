//    3. List of Names
// You will receive an array of names. Sort them alphabetically in ascending order 
// and print a numbered list of all the names, each on a new line.

function nameSort(nameArr) {
    //let sortedArr = nameArr.sort();
    let sortedArr = nameArr.sort((a, b) => a.localeCompare(b));

    for (let index = 0; index < sortedArr.length; index++) {
        const name = sortedArr[index];
        console.log(`${index + 1}. ${name}`);
    }
}



nameSort(["John", "Bob", "Christina", "Ema"])
nameSort(["John", "bob", "christina", "Ema"])