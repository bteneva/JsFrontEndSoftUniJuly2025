const loadButtonEl = document.querySelector("#load-records")
loadButtonEl.addEventListener('click', handleLoadRecords);

const addRecordBtn = document.getElementById("add-record")
addRecordBtn.addEventListener('click', handleAddRecord);

const editRecordBtn = document.getElementById("edit-record")
editRecordBtn.addEventListener('click', handleEditRecord);

const listUlElements = document.querySelector("#list")

const nameInputFormElement = document.getElementById("p-name")
const stepsInputFormElement = document.getElementById("steps")
const caloriesInputFormElement = document.getElementById("calories")

const BASE_URL = 'http://localhost:3030/jsonstore/records'

let selectedRecordId = null;

async function handleLoadRecords() {
    const recordsResp = await fetch(BASE_URL);
    const recordsData = await recordsResp.json()
    const recordsArr = Object.values(recordsData);

    listUlElements.innerHTML = '';

    recordsArr.forEach(record => {
        const listItemEl = document.createElement('li');
        listItemEl.classList.add('record');

        const infoDivElement = document.createElement('div')
        infoDivElement.classList.add('info');

        const namePEl = document.createElement('p')
        namePEl.textContent = record.name;
        
        const stepPEl = document.createElement('p')
        stepPEl.textContent = record.steps;

        const caloriePEl = document.createElement('p')
        caloriePEl.textContent = record.calories;

        const buttonsDivEl = document.createElement('div')
        buttonsDivEl.classList.add("btn-wrapper")

        const changeButtonEl = document.createElement('button')
        changeButtonEl.classList.add("change-btn")
        changeButtonEl.textContent = "Change"

        const deleteButtonEl = document.createElement('button')
        deleteButtonEl.classList.add("delete-btn")
        deleteButtonEl.textContent = "Delete"
        deleteButtonEl.addEventListener('click', handleDeleteRecord)

        infoDivElement.appendChild(namePEl)
        infoDivElement.appendChild(caloriePEl)
        infoDivElement.appendChild(stepPEl)

        buttonsDivEl.appendChild(changeButtonEl)
        buttonsDivEl.appendChild(deleteButtonEl)

        listItemEl.appendChild(infoDivElement)
        listItemEl.appendChild(buttonsDivEl)

        listUlElements.appendChild(listItemEl)

        changeButtonEl.addEventListener('click', handleShowEdit);

        function handleShowEdit(){
            nameInputFormElement.value = record.name;
            stepsInputFormElement.value = record.steps;
            caloriesInputFormElement.value = record.calories;

            addRecordBtn.disabled = true;
            editRecordBtn.disabled = false;

            selectedRecordId = record._id;
        }

        async function handleDeleteRecord() {
            await fetch(`${BASE_URL}/${record._id}`, {
                method:'DELETE'
            });

            await handleLoadRecords();
            
        }


    })
    
}

async function handleAddRecord() {
  const name = nameInputFormElement.value.trim();
  const steps = stepsInputFormElement.value.trim();
  const calories = caloriesInputFormElement.value.trim();

  if (!name || !steps || !calories) return;

  await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, steps, calories }),
  });

 
  handleLoadRecords();

  nameInputFormElement.value = "";
  stepsInputFormElement.value = '';
  caloriesInputFormElement.value = '';
  
  await handleLoadRecords()
 
}

async function handleEditRecord() {
    const name = nameInputFormElement.value.trim();
    const steps = stepsInputFormElement.value.trim();
    const calories = caloriesInputFormElement.value.trim();
    
    await fetch(`${BASE_URL}/${selectedRecordId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, steps, calories, _id:selectedRecordId }),
  });
    handleLoadRecords();

    nameInputFormElement.value = "";
    stepsInputFormElement.value = '';
    caloriesInputFormElement.value = '';

    addRecordBtn.disabled = false;
    editRecordBtn.disabled = true;

}

