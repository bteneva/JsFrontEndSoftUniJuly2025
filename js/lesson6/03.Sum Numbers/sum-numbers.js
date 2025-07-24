function calc() {
    const num1InputElement = document.getElementById(`num1`)
    const num2InputElement = document.getElementById(`num2`)
    const sumImputEl = document.getElementById(`sum`)

    const num1 = Number(num1InputElement.value)
    const num2 = Number(num2InputElement.value)

    const sum = num1 + num2

    sumImputEl.value = sum

}