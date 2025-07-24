//    6. Count String Occurrences
// Write a function that receives a text and a single word that you need to search. Print the number of all occurrences of this word in the text.

function numberOfOccurencies(text, searchedWord){
    let occurrences = 0;
    let textWords = text.split(' ')

    for (let word of textWords){
        if (word === searchedWord)
            occurrences++
    }

    console.log(occurrences)
}

numberOfOccurencies('This is a word and it also is a sentence',
'is')

numberOfOccurencies('softuni is great place for learning new programming languages',
'softuni')