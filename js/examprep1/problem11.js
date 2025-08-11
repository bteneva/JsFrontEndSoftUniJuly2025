function solve(input) {
    const heroCount = Number(input.shift());
    const heroStat = {};

    // Register heroes
    for (let i = 0; i < heroCount; i++) {
        const [name, hpStr, bulletsStr] = input.shift().split(" ");
        const hp = Number(hpStr);
        const bullets = Number(bulletsStr);
        heroStat[name] = { hp, bullets };
    }

    // Process commands
    while (input[0] !== "Ride Off Into Sunset") {
        const [action, heroName, arg1, arg2] = input.shift().split(" - ");

        if (!heroStat.hasOwnProperty(heroName)) continue;

        switch (action) {
            case "FireShot":
                const target = arg1;
                if (heroStat[heroName].bullets > 0) {
                    heroStat[heroName].bullets--;
                    console.log(`${heroName} has successfully hit ${target} and now has ${heroStat[heroName].bullets} bullets!`);
                } else {
                    console.log(`${heroName} doesn't have enough bullets to shoot at ${target}!`);
                }
                break;

            case "TakeHit":
                const damage = Number(arg1);
                const attacker = arg2;
                heroStat[heroName].hp -= damage;

                if (heroStat[heroName].hp > 0) {
                    console.log(`${heroName} took a hit for ${damage} HP from ${attacker} and now has ${heroStat[heroName].hp} HP!`);
                } else {
                    delete heroStat[heroName];
                    console.log(`${heroName} was gunned down by ${attacker}!`);
                }
                break;

            case "Reload":
                const bulletsNeeded = 6 - heroStat[heroName].bullets;
                if (bulletsNeeded > 0) {
                    heroStat[heroName].bullets = 6;
                    console.log(`${heroName} reloaded ${bulletsNeeded} bullets!`);
                } else {
                    console.log(`${heroName}'s pistol is fully loaded!`);
                }
                break;

            case "PatchUp":
                const amount = Number(arg1);
                if (heroStat[heroName].hp < 100) {
                    const healed = Math.min(amount, 100 - heroStat[heroName].hp);
                    heroStat[heroName].hp += healed;
                    console.log(`${heroName} patched up and recovered ${healed} HP!`);
                } else {
                    console.log(`${heroName} is in full health!`);
                }
                break;
        }
    }

    // Final printout
    for (const hero in heroStat) {
        console.log(`${hero}\n  HP: ${heroStat[hero].hp}\n  Bullets: ${heroStat[hero].bullets}`);
    }
}
