//    1. Ages
// Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder.
// The input comes as a single number parameter. The bounders are:

function ageDeterminator(age){
    if ((age >= 0) && (age <= 2)){
        console.log(`baby`)
    }
    else if ((age >= 3) && (age <= 13)){
        console.log(`child`)
    }
    else if ((age >= 14) && (age <= 19)){
        console.log(`teenager`)
    }
    else if ((age >= 20) && (age <= 65)){
        console.log(`adult`)
    }
    else if (age >= 66){
        console.log(`elder`)
    }
    else {
        console.log(`out of bounds`)
    }
}

ageDeterminator(1)
ageDeterminator(15)
ageDeterminator(25)
ageDeterminator(80)
ageDeterminator(0)
ageDeterminator(120)