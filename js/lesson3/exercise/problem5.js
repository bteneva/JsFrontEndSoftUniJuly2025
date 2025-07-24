// //    5. Palindrome Integers
// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001.
//  Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.
// Output
//     • If the current integer is a palindrome, print: "true"
//     • Otherwise, print: "false"

function palindromeCheck(arr) {
    for (let num of arr) {
        let numberAsString = num.toString();
        let reversedString = numberAsString.split('').reverse().join('');
        if (numberAsString === reversedString) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeCheck([123,323,421,121])

