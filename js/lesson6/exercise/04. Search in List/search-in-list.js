function solve() {
   const townLiElements = document.querySelectorAll(`#towns li`)
   const searchInput = document.getElementById(`searchText`)

   const resultDivElement = document.getElementById(`result`)

   const searchElement = searchInput.value.trim()

   let matches = 0

   townLiElements.forEach(liElement => {
      if (liElement.textContent.includes(searchElement)){
         liElement.style.fontWeight = `bold`
         liElement.style.textDecotarion = `underline`
         matches++
      }
      else {
         liElement.style.fontWeight = `normal`
         liElement.style.textDecotarion = `none`
      }
   })
   resultDivElement.textContent = `${matches} matches found` 

}