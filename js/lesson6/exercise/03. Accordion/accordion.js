function toggle() {
    const buttonElement = document.querySelector(`.button`)
    const extraDivElement = document.getElementById(`extra`)

    if (buttonElement.textContent === `More`){
        extraDivElement.style.display = `block`
        buttonElement.textContent = `Less`
    } else {
        extraDivElement.style.display = `none`
        buttonElement.textContent = `More`
    }

}