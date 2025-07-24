

function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice){
  
    let hemletBrokenCount = 0
    let swordBrokenCount = 0;
    let shieldBrokenCount = 0;
    let armorBrokenCount = 0;

       for (let i = 1; i <= lostFightsCount; i ++) {

        if (i % 2 === 0){
            hemletBrokenCount++     
        }
        if (i % 3 === 0){
            swordBrokenCount++
        }
        if ((i % 2 === 0) && (i % 3 === 0)){
            shieldBrokenCount++
         }
       }
       armorBrokenCount = Math.floor(shieldBrokenCount / 2);

       let expenses = hemletBrokenCount * helmetPrice + swordBrokenCount * swordPrice + shieldBrokenCount * shieldPrice + armorBrokenCount * armorPrice

       console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
   

}

gladiatorExpenses(7,2,3,4,5)
gladiatorExpenses(23,12.50,21.50,40,200)