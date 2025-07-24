function extractText() {
    const liElements = document.querySelectorAll(`li`)
    const textAreaEl = document.getElementById(`result`)

    for (const liElement of liElements){
        const liText = liElement.textContent;
        textAreaEl.textContent +=liText +`\n`;
    }
    
}