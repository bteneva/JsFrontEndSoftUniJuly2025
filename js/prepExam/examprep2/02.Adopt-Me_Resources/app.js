window.addEventListener("load", solve);

function solve() {
  const typeFormElement = document.querySelector("#type")
  const ageFormElement = document.querySelector("#age")
  const genderSelectElement = document.querySelector("#gender")
  const addoptionBtn = document.querySelector("#adopt-btn")

  const addoptionInfoElement = document.querySelector("#adoption-info")
  const adoptedListElemenet = document.querySelector("#adopted-list")

  addoptionBtn.addEventListener("click", adoptHandler);

  function adoptHandler(e) {
    e.preventDefault();


    const type = typeFormElement.value.trim();
    const gender = genderSelectElement.value.trim();
    const age = ageFormElement.value.trim();



    if (!type || !age || !gender) {
      return;
    }

    const liElement = document.createElement("li");
    const articleElement = document.createElement("article")

    const typeParagrElement = document.createElement("p");
    typeParagrElement.textContent = `Pet:${type}`;

    const ageParagrElement = document.createElement("p");
    ageParagrElement.textContent = `Age:${age}`;

    const genderParagrElement = document.createElement("p");
    genderParagrElement.textContent = `Gender:${gender}`;

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add("buttons")

    const editButtonElement = document.createElement('button');
    editButtonElement.classList.add("edit-btn");
    editButtonElement.textContent = 'Edit';

    const doneButtonElement = document.createElement('button');
    doneButtonElement.classList.add("done-btn");
    doneButtonElement.textContent = 'Done';

    articleElement.appendChild(typeParagrElement)
    articleElement.appendChild(genderParagrElement)
    articleElement.appendChild(ageParagrElement)

    buttonsDivElement.appendChild(editButtonElement)
    buttonsDivElement.appendChild(doneButtonElement)

    liElement.appendChild(articleElement)
    liElement.appendChild(buttonsDivElement)

    addoptionInfoElement.appendChild(liElement)


    typeFormElement.value = "";
    ageFormElement.value = "";
    genderSelectElement.value = "";

    editButtonElement.addEventListener('click', editHandler);


    function editHandler(e) {
      typeFormElement.value = type
      genderSelectElement.value = gender
      ageFormElement.value = age

      liElement.remove()
    }
    doneButtonElement.addEventListener('click', doneHandler);


    function doneHandler(e) {
      adoptedListElemenet.appendChild(liElement)
      editButtonElement.remove();
      doneButtonElement.remove();

      const clearButtonEl = document.createElement('button')
      clearButtonEl.classList.add('clear-btn');
      clearButtonEl.textContent = "Clear"
      liElement.appendChild(clearButtonEl)

      clearButtonEl.addEventListener('click', clearHandler);
      function clearHandler() {
        liElement.remove();
      }


    }


  }


}
