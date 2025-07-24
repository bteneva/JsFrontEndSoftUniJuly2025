function sumTable() {
    const priceTableDataElements = Array.from(document.querySelectorAll(`tbody tr td:nth-child(2)`))
    const sumTablePriceElements = priceTableDataElements.pop()


    let sum = 0;

    for (let i=0; i<priceTableDataElements.length; i++){
        sum += Number(priceTableDataElements[i].textContent)
    }

    sumTablePriceElements.textContent = sum
}