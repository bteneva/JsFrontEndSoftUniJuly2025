function solve (arr){

    let astronautInfo = {}
    const n = Number(arr.shift())

    for (let i = 0; i < n; i++){

        const [name, section, skilsInfo] = arr.shift().split(" ");
        const skills = skilsInfo.split(",")

        astronautInfo[name] = {
            section: section,
            skills: skills
        }

    }
    let commandArr = arr.shift()
    while (commandArr !== "End"){

        let commandInfo = commandArr.split(" / ");
        const command = commandInfo.shift();
        const name = commandInfo.shift();

        switch(command){
            case "Perform":
                let section = commandInfo.shift();
                const neededSkill = commandInfo.shift();

                if (astronautInfo[name].section === section && astronautInfo[name].skills.includes(neededSkill)){
                    console.log(`${name} has successfully performed the skill: ${neededSkill}!`)
                }
                else {
                    console.log(`${name} cannot perform the skill: ${neededSkill}.`)
                };
                break;
            case "Transfer":
                let newSection = commandInfo.shift();
                astronautInfo[name].section = newSection
                console.log(`${name} has been transferred to: ${newSection}`);
                break;
            
            case "Learn Skill":
                const newSkill = commandInfo.shift();
                if (astronautInfo[name].skills.includes(newSkill)){
                    console.log(`${name} already knows the skill: ${newSkill}.`)
                }
                else {
                    astronautInfo[name].skills.push(newSkill)
                    console.log(`${name} has learned a new skill: ${newSkill}.`)
                };
                break;


        }
        commandArr = arr.shift()

    }
    for (let name in astronautInfo) {
    const data = astronautInfo[name];
    const sortedSkills = [...data.skills].sort((a, b) => a.localeCompare(b));
    console.log(`Astronaut: ${name}, Section: ${data.section}, Skills: ${sortedSkills.join(", ")}`);
    }

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
])