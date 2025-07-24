//    5. Reveal Words
// Write a function, which receives two parameters. 
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.

function revealWords(str, strTemplates){
    let keyWordArr = str.split(`, `)
    let words = strTemplates.split(' ');
    for (let i = 0; i < words.length; i++) {
        keyWordArr.forEach(word => {
            let mask = '*'.repeat(word.length);
            if (words[i] === mask) {
                words[i] = word;
            }
        });
    }
    console.log(words.join(` `))

}

revealWords('great','softuni is ***** place for learning new programming languages')
revealWords('great, learning','softuni is ***** place for ******** new programming languages')