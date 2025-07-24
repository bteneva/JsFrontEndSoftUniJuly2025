//    2. Pascal or Camel Case
//An HTML file is given and your task is to write a function that takes two string parameters as an input and transforms the first parameter to the type required by the second parameter.
   // • The first parameter will be the text that you need to modify depending on the second parameter. The words in it will always be separated by space.
    //• The second parameter will be either "Camel Case" or "Pascal Case". In case of different input, your output should be "Error!"
// When the button is clicked the function should convert the first string to either of the cases. The output should consist of only one word - the string you have modified. Once your output is done, you should set it as HTML to the <span> element. For more information, see the examples below:


function solve() {
  const inputText = document.getElementById(`text`)
  const namingConventionInput = document.getElementById(`naming-convention`)

  const result = document.getElementById(`result`)

  const inputTextToConvert = inputText.value.trim().toLowerCase()
  const words = inputTextToConvert.split(` `)

  const namingConvention = namingConventionInput.value.trim()

  if (namingConvention === `Camel Case`){
    result.textContent = words[0] + words.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join(``)

  }
  else if (namingConvention === `Pascal Case`){
    result.textContent = words.slice(0).map(word => word[0].toUpperCase() + word.slice(1)).join(``)


  }
  else {

    result.textContent = `Error!`
  }
}