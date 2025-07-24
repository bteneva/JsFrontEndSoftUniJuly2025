function colorize() {
    const trElements = document.querySelectorAll(`tbody tr`)

    trElements.forEach((trElement, index)=>{
        if (index % 2 !== 0){
            trElement.style.backgroundColor = `Teal`
        }
    });
}