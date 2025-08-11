const nameInputElement = document.getElementById("g-name")
const typeInputElement = document.getElementById("type")
const playersInputElement = document.getElementById("players")

const addGameBtn = document.getElementById("add-game")
addGameBtn.addEventListener('click', handlerAddGame)

const editGameBtn = document.querySelector("#edit-game")
editGameBtn.addEventListener('click', handlerEditGame)

const loadButtonEl = document.querySelector("#load-games")
loadButtonEl.addEventListener('click', handlesLoad)

const gamesListDivEl = document.getElementById("games-list")


const BASE_URL = 'http://localhost:3030/jsonstore/games'
let selectedGameId ='';
editGameBtn.disabled = true;

async function handlesLoad() {
    const gamesResponse = await fetch(BASE_URL)
    const gamesData = await gamesResponse.json()

    const gamesArray = Object.values(gamesData)
    gamesListDivEl.textContent = ''

    gamesArray.forEach(gameObj => {
        console.log(gameObj)
        const gameDivEl = document.createElement('div')
        gameDivEl.classList.add("board-game")

        const contentDivEl = document.createElement('div')
        contentDivEl.classList.add('content')

        const namePEl = document.createElement('p')
        namePEl.textContent = gameObj.name;
       
        const typePEl = document.createElement('p')
        typePEl.textContent = gameObj.type

        const playersPEl = document.createElement('p')
        playersPEl.textContent = gameObj.players

        const buttonsDivEl = document.createElement('div')
        buttonsDivEl.classList.add("buttons-container")

        const changeButtonEl = document.createElement('button')
        changeButtonEl.classList.add("change-btn")
        changeButtonEl.textContent = "Change"

        changeButtonEl.addEventListener('click', handleLoadEdit)

        const deleteButtonEl = document.createElement('button')
        deleteButtonEl.classList.add("delete-btn")
        deleteButtonEl.textContent = "Delete"
        deleteButtonEl.addEventListener('click', handleDelete)

        


        contentDivEl.appendChild(namePEl)
        contentDivEl.appendChild(typePEl)
        contentDivEl.appendChild(playersPEl)
        gameDivEl.appendChild(contentDivEl)

        
        buttonsDivEl.appendChild(changeButtonEl)
        buttonsDivEl.appendChild(deleteButtonEl)
        gameDivEl.appendChild(buttonsDivEl)

        gamesListDivEl.appendChild(gameDivEl)

        function handleLoadEdit(){
            nameInputElement.value = gameObj.name;
            typeInputElement.value = gameObj.type;
            playersInputElement.value = gameObj.players;
            
            addGameBtn.disabled = true;
            editGameBtn.disabled = false;

            selectedGameId = gameObj._id;
          
        }
        async function handleDelete() {
          
          

            await fetch(`${BASE_URL}/${gameObj._id}`, {
                method:'DELETE'
            });

            await handlesLoad();
        }
        
    })


}
async function handlerAddGame() {

    const name = nameInputElement.value.trim()
    const type = typeInputElement.value.trim()
    const players = playersInputElement.value.trim()

    if (!name || !type || !players){
        return;
    }

      await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, type, players }),
  });

    nameInputElement.value ='';
    typeInputElement.value= '';
    playersInputElement.value ='';

    await handlesLoad()
}
async function handlerEditGame() {
    const name = nameInputElement.value.trim()
    const type = typeInputElement.value.trim()
    const players = playersInputElement.value.trim()

     await fetch(`${BASE_URL}/${selectedGameId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
    },
      body: JSON.stringify({ name, type, players, _id:selectedGameId }),
  });

  await handlesLoad();

  nameInputElement.value = '';
  typeInputElement.value = '';
  playersInputElement.value = '';

  addGameBtn.disabled = false;
  editGameBtn.disabled = true;

  selectedGameId =''
    
}











