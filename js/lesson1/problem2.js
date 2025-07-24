//    2. Student Information
// You will be given 3 parameters – student name (string), age (number), and average grade (number). Your task is to print all the info about the student in the following format: 
// `Name: {student name}, Age: {student age}, Grade: {student grade}`
//  Note: The grade should be formatted to the second decimal point.

function printStudent(studentName, studentAge, studentAvgGrade){
   //studentAvgGrade = studentAvgGrade.toFixed(2)
    //console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${studentAvgGrade}`)
    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${studentAvgGrade.toFixed(2)}`)
}

printStudent('Steve', 16, 3.2426)
