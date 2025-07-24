// 4. Print and Sum
// Write a function that displays numbers from given start to given end and their sum. The input comes as two number parameters. Print the result like the examples below:




function fromMtoNandSum(m,n){
    let sum = 0;
    let numsequence = '';
    for(i=m; i<=n; i++){
        numsequence+=i + ` `
        sum +=i
    }
    console.log(numsequence)
    console.log(`Sum: ${sum}`)
}

fromMtoNandSum(5, 10)