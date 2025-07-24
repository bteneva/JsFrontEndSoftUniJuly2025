function theatreThicketPrice(weekday, age){
    if (age < 0 || age > 122){
        console.log("Error!")
    }

    switch (weekday){
        case 'Weekday': 
    
        if (age > 0 & age < 18){
            console.log('12$')
        }
        else if(age <= 64 ){
            console.log('18$')
        }
        else if (age <= 122){
            console.log('12$')
        }
    
        break;
        case `Weekend`:
             
        
        if (age > 0 & age < 18){
            console.log('15$')
        }
        else if(age <= 64 ){
            console.log('20$')
        }
        else if (age <= 122){
            console.log('15$')
        }
        case `Holiday`:
        
           
            if (age > 0 & age < 18){
                console.log('5$')
            }
            else if(age <= 64 ){
                console.log('12$')
            }
            else if (age <= 122){
                console.log('10$')
            }
            
        default: 
        console.log("Error!")

    }

}

theatreThicketPrice('Weekday',42)
theatreThicketPrice('Holiday',-12)
theatreThicketPrice('Holiday', 15)
theatreThicketPrice('Weekday',-12)