function spellbookUnraveling(arr) {
    const spellWordRaw = arr.shift();
    let spellWord = spellWordRaw;

    for (const command of arr) {
        let commandArray = command.split('!');

        if (commandArray[0] === "RemoveEven") {
            let result = '';
            for (let char = 0; char < spellWord.length; char += 2) {
                result += spellWord[char];
            }
            spellWord = result;
            console.log(spellWord);

        } else if (commandArray[0] === 'TakePart') {
            const startIndex = Number(commandArray[1]);
            const endIndex = Number(commandArray[2]);
            spellWord = spellWord.slice(startIndex, endIndex);
            console.log(spellWord);

        } else if (commandArray[0] === 'Reverse') {
            const substr = commandArray[1];
            if (spellWord.includes(substr)) {
                spellWord = spellWord.replace(substr, '');
                const reversed = substr.split('').reverse().join('');
                spellWord += reversed;
                console.log(spellWord);
                
            } else {
                console.log ("Error")
            }
            

        } else if (commandArray[0] === 'End') {
            console.log(`The concealed spell is: ${spellWord}`);
            return;
        }
    }
}


spellbookUnraveling(["asAsl2adkda2mdaczsa", "RemoveEven","TakePart!1!9","Reverse!maz","End"])

spellbookUnraveling(["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m", "TakePart!31!42", "RemoveEven", "Reverse!anim", "Reverse!sad", "End"])