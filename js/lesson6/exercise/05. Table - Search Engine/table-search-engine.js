function solve() {
   const allTDElements = document.querySelectorAll(`tbody tr`)
   const inputSearchElement = document.getElementById(`searchField`)

   allTDElements.forEach(tr => tr.classList.remove('select'));


   const search = inputSearchElement.value.trim().toLowerCase();

  if (!search){
   return
  }
  
   allTDElements.forEach(element => {
      if (element.textContent.toLowerCase().includes(search)){
       
         element.classList.add(`select`)
      }
      
   });
}