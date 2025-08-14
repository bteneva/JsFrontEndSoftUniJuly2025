const BASE_URL = "http://localhost:3030/jsonstore/matches";
let selectedRecordId = "";

const teamHostInputEl = document.querySelector("#host");
const finalScoreInputEl = document.querySelector("#score");
const teamGuestInputEl = document.querySelector("#guest");

const addMatchButtonEl = document.querySelector("#add-match");
addMatchButtonEl.addEventListener('click', addMatchHandler);

const editMatchButtonEl = document.querySelector("#edit-match");
editMatchButtonEl.addEventListener('click', handleEdit);

const loadMatchesButton = document.querySelector("#load-matches");
loadMatchesButton.addEventListener('click', handleLoad);

const listUlEl = document.querySelector("#list");

async function handleLoad() {
    
    const recordsResponse = await fetch(BASE_URL);
    const recordsData = await recordsResponse.json();
    const recordsArr = Object.values(recordsData); 

    listUlEl.innerHTML = "";
     

    recordsArr.forEach(record => {
        const liMatchEl = document.createElement('li');
        liMatchEl.classList.add("match");

        const infoDivEl = document.createElement('div');
        infoDivEl.classList.add("info");

        const teamPEl = document.createElement('p');
        teamPEl.textContent = record.host;

        const finalScorePEl = document.createElement('p');
        finalScorePEl.textContent = record.score;

        const teamGuestPEl = document.createElement('p');
        teamGuestPEl.textContent = record.guest;

        infoDivEl.appendChild(teamPEl);
        infoDivEl.appendChild(finalScorePEl);
        infoDivEl.appendChild(teamGuestPEl);

        const buttonDivEl = document.createElement('div');
        buttonDivEl.classList.add("btn-wrapper");

        const changeButtonEl = document.createElement('button');
        changeButtonEl.classList.add("change-btn");
        changeButtonEl.textContent = "Change";
        changeButtonEl.addEventListener('click', handleShowEdit)

        const deleteButtonEl = document.createElement('button');
        deleteButtonEl.classList.add("delete-btn");
        deleteButtonEl.textContent = "Delete";
        deleteButtonEl.addEventListener('click', handleDelete)

        buttonDivEl.appendChild(changeButtonEl);
        buttonDivEl.appendChild(deleteButtonEl);

        liMatchEl.appendChild(infoDivEl);
        liMatchEl.appendChild(buttonDivEl);

        listUlEl.appendChild(liMatchEl);

        function handleShowEdit(){
            teamHostInputEl.value = record.host;
            finalScoreInputEl.value = record.score;
            teamGuestInputEl.value = record.guest;

            editMatchButtonEl.disabled = false;
            addMatchButtonEl.disabled = true;

            selectedRecordId = record._id;

        }
        async function handleDelete() {
            await fetch(`${BASE_URL}/${record._id}`, {
                method:'DELETE'
            });

            await handleLoad();
            
        }

        
    });
}
async function addMatchHandler(e) {
   
    const host = teamHostInputEl.value.trim();
    const score = finalScoreInputEl.value.trim();
    const guest = teamGuestInputEl.value.trim();

    if (!host || !score || !guest) return;

    await fetch(BASE_URL, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ host, score, guest }),
    });
    
    handleLoad();

    teamHostInputEl.value = "";
    finalScoreInputEl.value = "";
    teamGuestInputEl.value = "";

    
}

async function handleEdit(){
    
    const host = teamHostInputEl.value.trim();
    const score = finalScoreInputEl.value.trim();
    const guest = teamGuestInputEl.value.trim();
    await fetch(`${BASE_URL}/${selectedRecordId}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ host, score, guest, _id:selectedRecordId }),
    });

    teamHostInputEl.value = "";
    finalScoreInputEl.value = "";
    teamGuestInputEl.value = "";


    editMatchButtonEl.disabled = true;
    addMatchButtonEl.disabled = false;
    handleLoad();

}




  



