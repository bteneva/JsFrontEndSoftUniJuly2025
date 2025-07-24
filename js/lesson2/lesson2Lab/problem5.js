//Write a function that receives a text as a first parameter and a single word as a second.
//  Find all occurrences of that word in the text and replace them with the corresponding count of '*'.

function censoredWord (text, wordToCensor){
    let starTempleta = `*`.repeat(wordToCensor.length)
    let finalText = text.replaceAll(wordToCensor, starTempleta)

    console.log(finalText)


}

censoredWord('A small sentence with some words', 'small')