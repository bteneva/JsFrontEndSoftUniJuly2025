function solve(arr){
    let heroStat = {};

    const heroesNumber = Number(arr.shift());

    for (let i = 0; i < heroesNumber; i++) {
        const heroLine = arr.shift(); 
        const [heroName, hp, bullets] = heroLine.split(" ");
        heroStat[heroName] = {
            heroHp: Number(hp),
            heroBullets: Number(bullets),
        };
    }
    let commandArr = arr.shift();
    while (commandArr !== "Ride Off Into Sunset"){
        const tokens = commandArr.split(" - ")
        const action = tokens.shift();
        const heroName = tokens.shift()

        if (!heroStat.hasOwnProperty(heroName)) {
        commandArr = arr.shift();
        continue;
        }
        
        

        if (action === "FireShot") {
            const target = tokens.shift()
            if (heroStat[heroName].heroBullets > 0){
                heroStat[heroName].heroBullets--
                console.log(`${heroName} has successfully hit ${target} and now has ${heroStat[heroName].heroBullets} bullets!`)

            }
            else {
                console.log(`${heroName} doesn't have enough bullets to shoot at ${target}!`)

            }
        }
        else if (action === "TakeHit"){
            const damage = Number(tokens.shift());
            const attacker = tokens.shift();
            heroStat[heroName].heroHp-=damage

            if (heroStat[heroName].heroHp > 0) {
                console.log(`${heroName} took a hit for ${damage} HP from ${attacker} and now has ${heroStat[heroName].heroHp} HP!`)
            }
            else {
                delete heroStat[heroName];
                console.log(`${heroName} was gunned down by ${attacker}!`)
            }

        }
        else if (action === "Reload"){
            
            if (heroStat[heroName].heroBullets < 6){
                const reloaded = 6 - heroStat[heroName].heroBullets;
                heroStat[heroName].heroBullets = 6;
                console.log(`${heroName} reloaded ${reloaded} bullets!`)
            }
            else {
                console.log(`${heroName}'s pistol is fully loaded!`)
            }


        }
        else if (action === "PatchUp") {
        const amount = Number(tokens.shift());
        const currentHp = heroStat[heroName].heroHp;
        if (currentHp < 100) {
        const healed = Math.min(100 - currentHp, amount);
        heroStat[heroName].heroHp += healed;
        console.log(`${heroName} patched up and recovered ${healed} HP!`);
        } else {
        console.log(`${heroName} is in full health!`);
    }
}

        commandArr = arr.shift();

    }
   
    for (let heroName in heroStat) {
    console.log(`${heroName}`);
    console.log(`  HP: ${heroStat[heroName].heroHp}`);
    console.log(`  Bullets: ${heroStat[heroName].heroBullets}`);
}
   

}

solve(["2",
   "Gus 100 0",
   "Walt 100 6",
   "FireShot - Gus - Bandit",
   "TakeHit - Gus - 100 - Bandit",
   "Reload - Walt",
   "Ride Off Into Sunset"])

solve(["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
 "TakeHit - Walt - 30 - Bandit",
 "PatchUp - Walt - 20" ,
 "Reload - Jesse",
 "Ride Off Into Sunset"])

 solve(["2",
   "Gus 100 4",
   "Walt 100 5",
   "FireShot - Gus - Bandit",
   "TakeHit - Walt - 100 - Bandit",
   "Reload - Gus",
   "Ride Off Into Sunset"])