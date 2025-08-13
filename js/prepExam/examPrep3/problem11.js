function solve(arr) {
    const astronautInfo = {};
    const n = Number(arr.shift());

    // Въвеждаме астронавтите
    for (let i = 0; i < n; i++) {
        const [name, section, skillsInfo] = arr.shift().split(" ");
        astronautInfo[name] = {
            section,
            skills: skillsInfo.split(",")
        };
    }

    // Обработка на командите
    let commandLine = arr.shift();
    while (commandLine !== "End") {
        const [command, name, arg1, arg2] = commandLine.split(" / ");

        switch (command) {
            case "Perform": {
                const section = arg1;
                const neededSkill = arg2;
                if (astronautInfo[name].section === section &&
                    astronautInfo[name].skills.includes(neededSkill)) {
                    console.log(`${name} has successfully performed the skill: ${neededSkill}!`);
                } else {
                    console.log(`${name} cannot perform the skill: ${neededSkill}.`);
                }
                break;
            }
            case "Transfer": {
                const newSection = arg1;
                astronautInfo[name].section = newSection;
                console.log(`${name} has been transferred to: ${newSection}`);
                break;
            }
            case "Learn Skill": {
                const newSkill = arg1;
                if (astronautInfo[name].skills.includes(newSkill)) {
                    console.log(`${name} already knows the skill: ${newSkill}.`);
                } else {
                    astronautInfo[name].skills.push(newSkill);
                    console.log(`${name} has learned a new skill: ${newSkill}.`);
                }
                break;
            }
        }
        commandLine = arr.shift();
    }

    // Финален отчет
    Object.entries(astronautInfo).forEach(([name, data]) => {
        console.log(`Astronaut: ${name}, Section: ${data.section}, Skills: ${data.skills.join(", ")}`);
    });
}

solve([
    "2",
    "Alice command_module piloting,communications",
    "Bob engineering_bay repair,maintenance",
    "Perform / Alice / command_module / piloting",
    "Perform / Bob / command_module / repair",
    "Learn Skill / Alice / navigation",
    "Perform / Alice / command_module / navigation",
    "Transfer / Bob / command_module",
    "Perform / Bob / command_module / maintenance",
    "End"
]);
