function spellbookUnraveling(input) {
    let spellWord = input.shift();

    const commands = {
        RemoveEven: () => {
            spellWord = spellWord
                .split('')
                .filter((_, i) => i % 2 === 0)
                .join('');
            console.log(spellWord);
        },
        TakePart: (start, end) => {
            spellWord = spellWord.slice(Number(start), Number(end));
            console.log(spellWord);
        },
        Reverse: (substr) => {
            if (spellWord.includes(substr)) {
                spellWord = spellWord.replace(substr, '');
                const reversed = substr.split('').reverse().join('');
                spellWord += reversed;
                console.log(spellWord);
            }
            else {
                console.log("Error")
            }
        },
        End: () => {
            console.log(`The concealed spell is: ${spellWord}`);
        }
    };

    for (const line of input) {
        const [action, ...args] = line.split('!');

        if (action === 'End') {
            commands.End();
            break;
        }

        if (commands[action]) {
            commands[action](...args);
        }
    }
}
