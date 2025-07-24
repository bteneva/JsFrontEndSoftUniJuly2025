//    3. Excellent Grade
// Write a function that receives a single number and checks if the grade is excellent or not. 
// If it is, print "Excellent", otherwise print "Not excellent".

function isExcellent(grade){
    if (grade >= 5.50){
        console.log(`Excellent`)
    }
    else {
        console.log(`Not excellent`)
    }
}

isExcellent(5.50)
isExcellent(4.00)