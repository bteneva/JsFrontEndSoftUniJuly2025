

// function wordsUppercase(text){

//     let words = ``
//     for (let i = 0; i <= text.length; i++) {

//        if (/^[a-zA-Z]$/.test(text[i])) {
//         words += text[i].toUpperCase()
//        }
//        if ((text[i] === ` `) && ((words[words.length-2]) !== `,`)){
//         words += `, `
//        }
//        else if ((text[i] === ` `) && ((words[words.length-1]) === `,`)){
//         words += ` `
//        }
//        if (/^[@\$!?\-]$/.test(text[i])){
//          words +=``
//        }
//        if (text[i]===`.`){
//         words +=`, `

//        }
      

//     }
//     console.log(words)


// }

function printWOrd(text){
    console.log(text
        .match(/\b[A-Za-z]+\b/g)         
        .map(word => word.toUpperCase()) 
        .join(', '))
}

function wordsUppercase(text) {
    return text
      .match(/\b[A-Za-z]+\b/g)         
      .map(word => word.toUpperCase()) 
      .join(', ');                    
  }

wordsUppercase('Hi, how are you?')
wordsUppercase('hello')
printWOrd(`Functions in JS can be nested, i.e. hold other functions`)