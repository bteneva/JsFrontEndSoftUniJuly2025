// //    3. Characters in Range
// Write a function that receives two characters and prints on a single line all the characters in between them 
// according to the ASCII code.
//  Keep in mind that the second character code might be before the first one inside the ASCII table.

function printCharactersInRange(char1, char2) {
    let start = char1.charCodeAt(0);
    let end = char2.charCodeAt(0);

    if (start > end) {
        [start, end] = [end, start];
    }

    let charString = '';
    for (let i = start + 1; i < end; i++) {
        charString += String.fromCharCode(i) + ' ';
    }

    console.log(charString.trim());
}
printCharactersInRange(`a`, `d`)
printCharactersInRange('C','#')