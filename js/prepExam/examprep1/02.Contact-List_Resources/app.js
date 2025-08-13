window.addEventListener("load", solve);

function solve() {
  const nameInputEl = document.getElementById("name");
  const phoneInputEl = document.getElementById("phone");
  const categoryInputEl = document.getElementById("category");
  const checkListULEl = document.querySelector("#check-list")
  const contactListULEl = document.querySelector("#contact-list")

  const addButtonEl = document.getElementById("add-btn");

  addButtonEl.addEventListener('click', addInfoHandler)

  function addInfoHandler(e){

    e.preventDefault();

    const name = nameInputEl.value.trim()
    const phone = phoneInputEl.value.trim()
    const category = categoryInputEl.value.trim()

    if (!name || ! phone || !category){
      return;
    }
    const liElement = document.createElement('li');
    const articleElement = document.createElement('article');
    const namePEl = document.createElement('p')
    namePEl.textContent = `name:${name}`
    const phonePEl = document.createElement('p')
    phonePEl.textContent= `phone:${phone}`
    const categoryPEl = document.createElement('p')
    categoryPEl.textContent = `category:${category}`
    const buttonDivEl = document.createElement('div')
    buttonDivEl.classList.add('buttons')
    

    const editButtonEl = document.createElement('button')
    editButtonEl.classList.add("edit-btn")
    

     const saveButtonEl = document.createElement('button')
    saveButtonEl.classList.add("save-btn")

    buttonDivEl.appendChild(saveButtonEl)
    buttonDivEl.appendChild(editButtonEl)

    articleElement.appendChild(namePEl)
    articleElement.appendChild(phonePEl)
    articleElement.appendChild(categoryPEl)

    liElement.appendChild(articleElement)
    liElement.appendChild(buttonDivEl)

    checkListULEl.appendChild(liElement)

    editButtonEl.addEventListener('click', handleEditContact);

    function handleEditContact(){
      nameInputEl.value = name;
      phoneInputEl.value = phone;
      categoryInputEl.value = category;

      liElement.remove();
    }

    saveButtonEl.addEventListener('click', handleSaveContacts)

    function handleSaveContacts(){

      contactListULEl.appendChild(liElement);
      editButtonEl.remove()
      saveButtonEl.remove()

      const deleteBtnEl = document.createElement('button')
      deleteBtnEl.classList.add('del-btn')
      liElement.appendChild(deleteBtnEl)

      deleteBtnEl.addEventListener('click', handleDeleteContact);

      function handleDeleteContact(){
        liElement.remove()
      }

    }

  }
    
  }
  