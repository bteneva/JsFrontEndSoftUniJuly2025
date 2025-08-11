window.addEventListener("load", solve);

function solve() {

  const typeInputEl = document.querySelector("#type")
  const ageInputEl = document.querySelector("#age")
  const genderInputSelectEl = document.querySelector("#gender")

  const buttonRegFormEl = document.querySelector("#register-btn")
  buttonRegFormEl.addEventListener('click', handleRegister)

  const pendingListULEl = document.querySelector("#registered-list")

  const confirmedListUlEl = document.querySelector("#confirmed-list")

  function handleRegister(e){
    
     e.preventDefault();

    const type = typeInputEl.value.trim()
    const age = ageInputEl.value.trim()
    const gender = genderInputSelectEl.value

    if (!type || ! age || !gender){
      
      return;
    }

    const liElement = document.createElement('li')
    const articleElement = document.createElement('article')

    const typePEl = document.createElement('p')
    typePEl.textContent = "Blood Type: " + type;
    const genderPEl = document.createElement('p')
    genderPEl.textContent = "Gender: " +gender;
    const agePEl = document.createElement('p')
    agePEl.textContent = "Age: " + age;
    

    const buttonDivEl = document.createElement('div')
    buttonDivEl.classList.add("buttons")
    const editButtonEl = document.createElement('button')
    editButtonEl.classList.add("edit-btn")
    editButtonEl.textContent = "Edit"
    editButtonEl.addEventListener('click', handleEdit)


    const doneButtonEl = document.createElement('button')
    doneButtonEl.classList.add("done-btn")
    doneButtonEl.textContent = "Confirm"
    doneButtonEl.addEventListener('click', handleConfirm)
    
    articleElement.appendChild(typePEl)
    articleElement.appendChild(genderPEl)
    articleElement.appendChild(agePEl)

    buttonDivEl.appendChild(editButtonEl)
    buttonDivEl.appendChild(doneButtonEl)

    liElement.appendChild(articleElement)
    liElement.appendChild(buttonDivEl)

    pendingListULEl.appendChild(liElement);

    typeInputEl.value =""
    genderInputSelectEl.value = ""
    ageInputEl.value = ""



    function handleEdit(){
      typeInputEl.value = type
      ageInputEl.value = age
      genderInputSelectEl.value = gender

      liElement.remove()


    }

    function handleConfirm(){
      confirmedListUlEl.appendChild(liElement)
      editButtonEl.remove()
      doneButtonEl.remove()

      const clearButton = document.createElement('button')
      clearButton.classList.add("clear-btn")
      clearButton.textContent = "Clear"
      liElement.appendChild(clearButton)

      clearButton.addEventListener('click', handleClear)

      function handleClear(){
        liElement.remove()
      }

    
    }


  }

  
}
