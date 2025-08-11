//const { createElement } = require("react");

document.addEventListener('DOMContentLoaded', solve);



function solve() {
  const formElement = document.getElementById("task-input")
  const sectionsInputElement = document.querySelector('#task-input input[type="text"]');
  const contentDivEl = document.getElementById("content")
  
  formElement.addEventListener('submit', handleFormSubmit);

  function handleFormSubmit(e){
   e.preventDefault();
   const sectionsString = sectionsInputElement.value.trim()
   const sectionArr = sectionsString.split(", ")
   
   sectionArr.forEach(element => {
      const divElement = document.createElement('div')
      const pElement = document.createElement("p");
      pElement.textContent = element;
      pElement.style.display = 'none'

      divElement.appendChild(pElement)

      divElement.addEventListener('click', ()=>{
         pElement.style.display='block'
      })

      contentDivEl.appendChild(divElement)
      
   });
  }
}