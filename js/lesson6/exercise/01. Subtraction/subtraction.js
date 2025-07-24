function subtract() {
    const firstNumInputElement = document.getElementById(`firstNumber`)
    const secondNumInputElement = document.getElementById(`secondNumber`)

    const resultSpanElement = document.getElementById(`result`)

    const firstNum = Number(firstNumInputElement.value)
    const seconNum = Number(secondNumInputElement.value)

    const result = firstNum - seconNum

    resultSpanElement.textContent = result
}