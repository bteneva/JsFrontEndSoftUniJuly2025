function solve(arr) {
    let warriorsInfo = {};
    const warriorsNumber = Number(arr.shift());

   
    for (let i = 0; i < warriorsNumber; i++) {
        const [warriorName, weapon, strength] = arr.shift().split("-");
        warriorsInfo[warriorName] = {
            weapons: [weapon], 
            strength: Number(strength),
        };
    }

    let commandArr = arr.shift();

    while (commandArr !== "The Saga Ends") {
        const tokens = commandArr.split(" -> ");
        const action = tokens.shift();
        const warriorName = tokens.shift();

        if (action === "Raid") {
            const wWeapon = tokens.shift();
            const strengthReq = Number(tokens.shift());

            if (
                !warriorsInfo[warriorName].weapons.includes(wWeapon) ||
                warriorsInfo[warriorName].strength < strengthReq
            ) {
                console.log(`${warriorName} couldn't join the raid with ${wWeapon}!`);
            } else {
                warriorsInfo[warriorName].strength -= strengthReq;
                console.log(`${warriorName} fought bravely with ${wWeapon} and now has ${warriorsInfo[warriorName].strength} strength!`);
            }
        }

        else if (action === "Train") {
            const strengthGained = Number(tokens.shift());
            let currentStrength = warriorsInfo[warriorName].strength;

            if (currentStrength === 100) {
                console.log(`${warriorName} is already at full strength!`);
            } 
            else if (currentStrength + strengthGained > 100) {
                const actualGained = 100 - currentStrength;
                warriorsInfo[warriorName].strength = 100;
                console.log(`${warriorName} trained hard and gained ${actualGained} strength!`);
            } 
            else {
                warriorsInfo[warriorName].strength += strengthGained;
                console.log(`${warriorName} trained hard and gained ${strengthGained} strength!`);
            }
        }

        else if (action === "Forge") {
            const newWeapon = tokens.shift();

            if (!warriorsInfo[warriorName].weapons.includes(newWeapon)) {
                warriorsInfo[warriorName].weapons.push(newWeapon);
                console.log(`${warriorName} has forged a new weapon: ${newWeapon}!`);
            } else {
                console.log(`${warriorName} already wields ${newWeapon}.`);
            }
        }

        commandArr = arr.shift();
    }

    for (const [name, info] of Object.entries(warriorsInfo)) {
        console.log(`Warrior: ${name}\n - Weapons: ${info.weapons.map(capitalize).join(", ")}\n - Strength: ${info.strength}`);
        
    }
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
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


solve([
    "3",
    "Floki-Hammer-20",
    "Helga-Net-100",
    "Thorvald-Axe-70",
    "Forge -> Helga -> Trap",
    "Raid -> Floki -> Hammer -> 30",
    "Raid -> Helga -> Trap -> 80",
    "Forge -> Thorvald -> Hammer",
    "The Saga Ends"
]);

solve(["3",
"Floki-Hammer-20",
"Helga-Net-100",
"Thorvald-Axe-70",
"Forge -> Helga -> Trap",
"Raid -> Floki -> Hammer -> 30",
"Raid -> Helga -> Trap -> 80",
"Forge -> Thorvald -> Hammer",
"The Saga Ends"])