function solve(arr){

    let encodedMsg = arr.shift();

    let commandLine = arr.shift();

    

    while (commandLine !== "Buy"){

        const [command, substring, replacement] = commandLine.split("?");

        if ( command === "TakeEven"){
            let decodedMsg = '';
            for (let i= 0; i < encodedMsg.length; i +=2 ){
                decodedMsg += encodedMsg[i]
            }
            encodedMsg = decodedMsg;

            console.log(decodedMsg);

        }
        else if (command === "ChangeAll"){
            encodedMsg = encodedMsg.split(substring).join(replacement);
            console.log(encodedMsg);
            

        }
       else if (command === "Reverse") {
        
        if (encodedMsg.includes(substring)) {
       
        const index = encodedMsg.indexOf(substring);

        encodedMsg = encodedMsg.slice(0, index) +
                     encodedMsg.slice(index + substring.length);

        const reversed = substring.split("").reverse().join("");
        encodedMsg += reversed;

        console.log(encodedMsg);
        } else {
        console.log("error");
        }
    }

        commandLine = arr.shift();
        

    }

    console.log(`The cryptocurrency is: ${encodedMsg}`);

}

solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"])

solve(["PZDfA2PkAsakhnefZ7aZ", 
"TakeEven",
"TakeEven",
"TakeEven",
"ChangeAll?Z?X",
"ChangeAll?A?R",
"Reverse?PRX",
"Buy"])