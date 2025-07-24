//    4. Substring
// Write a function that receives a string and two numbers. The numbers will be a starting index and count of elements to substring. Print the result.

function copySubstring(str, startIndex, charCount){

    let substring = str.substring(startIndex, startIndex + charCount)
    console.log(substring)

}

copySubstring('ASentence', 1, 8)