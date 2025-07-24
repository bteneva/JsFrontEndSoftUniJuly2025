//    3. *Calculator
// Write a function that receives 3 parameters: a number, an operator (string), and another number.
// The operator can be:  '+', '-', '/', '*'. Print the result of the calculation on the console formatted to the second decimal point.


function calculator (number1, operator, number2){
    let result = 0;
    switch (operator) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;
        case '/':
            result = number1 / number2
            break;

        case '*':
            result = number1 * number2
            break;

    }
    console.log(result.toFixed(2))

}

calculator(5,'+', 10)
calculator(25.5,'-',3)