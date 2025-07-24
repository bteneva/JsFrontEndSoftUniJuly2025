// /Write a program that receives a total of 4 parameters in the format x1, y1, x2, y2. 
// Check if the distance between each point (x, y) and the beginning of the Cartesian coordinate system (0, 0) is valid. 
// A distance between two points is considered valid if it is an integer value. 


function validityChecker(x1, y1, x2, y2){

    let distanceTo01 =  Math.sqrt(Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2));
    let distanceTo02 = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    if (Number.isInteger(distanceTo01)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(distanceTo02)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)

     }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
      }
   
    if (Number.isInteger(distance)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
    else {
        
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}



validityChecker(3, 0, 0, 4)
validityChecker(0, 0, 0, 0)