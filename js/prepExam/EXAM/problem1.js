

function solve(arr){

    let warriorsInfo = {};
    const warrirorsNumber = Number(arr.shift());

    
    for (let i = 0; i < warrirorsNumber; i++) {
        const warriorLine = arr.shift(); 
    
        const [warriorName, weapon, strength] = warriorLine.split("-");
        warriorsInfo[warriorName] = {
            weapon: weapon,
            strength: Number(strength),

            
        };
        
    }
   


    let commandArr = arr.shift();
    

     while (commandArr !== "The Saga Ends"){
        const tokens = commandArr.split(" -> ")

        
        const action = tokens.shift();
        const warriorName = tokens.shift()
        

        if (action === "Raid" ){
            const wWeapon = tokens.shift()
            const strengthReq = Number(tokens.shift())
            console.log(wWeapon)
            console.log(strengthReq)
            if (!warriorsInfo[warriorName].weapon || (warriorsInfo[warriorName].strength - strengthReq) < 0){
                console.log(`${warriorName} couldn't join the raid with ${wWeapon}!`)
                return;
            }
            console.log(`${warriorName} fought bravely with ${wWeapon} and now has ${warriorsInfo[warriorName].strength - strengthReq} strength!`)

        }
        else if (action === "Train"){
            const strengthGained = Number(tokens.shift());
            let currentStrength = warriorsInfo[warriorName].strength;

            if (currentStrength === 100) {
                console.log(`${warriorName} is already at full strength!`);
    } 
            else if (currentStrength + strengthGained > 100){
                const actualGained = 100 - currentStrength;
                warriorsInfo[warriorName].strength = 100;
                console.log(`${warriorName} trained hard and gained ${actualGained} strength!`);
    } 
            
            else {
               warriorsInfo[warriorName].strength += strengthGained;
                console.log(`${warriorName} trained hard and gained ${strengthGained} strength!`);

        }

        // else if (action === "Forge"){

        // }
        
        commandArr = arr.shift();

     }






}

solve([
    "3",
    "Ragnar-Axe-80",
    "Lagertha-Spear-95",
    "Bjorn-Sword-100",
    "Raid -> Ragnar -> Axe -> 30",
    "Forge -> Ragnar -> Shield",
    "Train -> Lagertha -> 10",
    "Train -> Bjorn -> 5",
    "Forge -> Lagertha -> Spear",
    "The Saga Ends"
]);