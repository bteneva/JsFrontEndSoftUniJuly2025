// //    6. Password Validator
// Write a function that checks if a given password is valid. Password validations are:
//     • The length should be 6 - 10 characters (inclusive)
//     • It should consist only of letters and digits
//     • It should have at least 2 digits 
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
//     • "Password must be between 6 and 10 characters"
//     • "Password must consist only of letters and digits"
//     • "Password must have at least 2 digits"

function passwordValidation(password) {

    function checkLength(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function onlyLettersAndDigitsCheck(password) {
        for (let char of password) {
            let code = char.charCodeAt(0);
            // check if not letter and not digit
            if (!(code >= 48 && code <= 57) && // digits
                !(code >= 65 && code <= 90) && // uppercase letters
                !(code >= 97 && code <= 122)) // lowercase letters
            {
                return false;
            }
        }
        return true;
    }

    function digitsCount(password) {
        let count = 0;
        for (let char of password) {
            if (char >= '0' && char <= '9') {
                count++;
            }
        }
        return count;
    }

    let isLengthValid = checkLength(password);
    let isOnlyLettersAndDigits = onlyLettersAndDigitsCheck(password);
    let hasAtLeast2Digits = digitsCount(password) >= 2;

    if (isLengthValid && isOnlyLettersAndDigits && hasAtLeast2Digits) {
        console.log("Password is valid");
    }
    if (!isLengthValid) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!isOnlyLettersAndDigits) {
        console.log("Password must consist only of letters and digits");
    }
    if (!hasAtLeast2Digits) {
        console.log("Password must have at least 2 digits");
    }
}

passwordValidation('logIn')
passwordValidation(`MyPass123`)
passwordValidation(`Pa$s$s`)