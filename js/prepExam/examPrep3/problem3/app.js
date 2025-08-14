const nameInputEl = document.getElementById("name");
const quantityInputEl = document.getElementById("quantity");
const dateInputEl = document.getElementById("date");

const BASE_URL = 'http://localhost:3030/jsonstore/orders';

const orderButton = document.querySelector("#order-btn");
orderButton.addEventListener('click', handleOrder);

const loadOrdersButton = document.querySelector("#load-orders");
loadOrdersButton.addEventListener('click', handleLoad);

const editButton = document.querySelector("#edit-order");
editButton.addEventListener('click', handleEdit);

const divListElement = document.querySelector("#list");

let currentEditId = null; 

async function handleOrder(e) {
    e.preventDefault();

    const name = nameInputEl.value.trim();
    const quantity = quantityInputEl.value.trim();
    const date = dateInputEl.value.trim();

    if (!name || !quantity || !date) {
        return;
    }

    await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, quantity, date }),
    });

    clearInputFields();
    await handleLoad();
}

async function handleLoad() {
    const recordsResponse = await fetch(BASE_URL);
    const recordsData = await recordsResponse.json();
    const recordsArr = Object.entries(recordsData); 

    divListElement.innerHTML = "";

    recordsArr.forEach(([id, record]) => {
        const containerDivEl = document.createElement('div');
        containerDivEl.classList.add("container");

        const nameH2Element = document.createElement('h2');
        nameH2Element.textContent = record.name;

        const quantityH2Element = document.createElement('h2');
        quantityH2Element.textContent = record.quantity;

        const dateH2Element = document.createElement('h2');
        dateH2Element.textContent = record.date;

        const changeButtonEl = document.createElement('button');
        changeButtonEl.classList.add("change-btn");
        changeButtonEl.textContent = "Change";
        changeButtonEl.addEventListener('click', () => handleChange(id, record));

        const doneButtonEl = document.createElement('button');
        doneButtonEl.classList.add("done-btn");
        doneButtonEl.textContent = "Done";
        doneButtonEl.addEventListener('click', () => handleDone(id));

        containerDivEl.appendChild(nameH2Element);
        containerDivEl.appendChild(quantityH2Element);
        containerDivEl.appendChild(dateH2Element);
        containerDivEl.appendChild(changeButtonEl);
        containerDivEl.appendChild(doneButtonEl);
        divListElement.appendChild(containerDivEl);
    });
}

function handleChange(id, record) {
    nameInputEl.value = record.name;
    quantityInputEl.value = record.quantity;
    dateInputEl.value = record.date;

    currentEditId = id; // запомняме кое ще редактираме

    orderButton.disabled = true;
    editButton.disabled = false;
}

async function handleEdit(e) {
    e.preventDefault();

    if (!currentEditId) return;

    const name = nameInputEl.value.trim();
    const quantity = quantityInputEl.value.trim();
    const date = dateInputEl.value.trim();

    await fetch(`${BASE_URL}/${currentEditId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, quantity, date }),
    });

    clearInputFields();
    orderButton.disabled = false;
    editButton.disabled = true;
    currentEditId = null;

    await handleLoad();
}

async function handleDone(id) {
    await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });
    await handleLoad();
}

function clearInputFields() {
    nameInputEl.value = "";
    quantityInputEl.value = "";
    dateInputEl.value = "";
}
