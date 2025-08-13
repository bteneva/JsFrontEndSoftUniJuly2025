const BASE_URL = 'http://localhost:3030/jsonstore/movies'

const titleInput = document.querySelector("#title")
const directorInput = document.querySelector("#director");
const releaseYearInput = document.querySelector("#year")

const addMovieButton = document.querySelector("#add-movie")
addMovieButton.textContent = "Add Movie"
addMovieButton.addEventListener('click', handleAdd)


const editMovieButton = document.querySelector("#edit-movie")
editMovieButton.addEventListener('click', handleEdit)

const loadMoviesButton = document.querySelector("#load-movies")
loadMoviesButton.addEventListener('click', handleLoad)

const movieListDiv = document.querySelector("#movie-list")

let selectedMovieId = '';

async function handleAdd() {

    const title = titleInput.value.trim();
    const director = directorInput.value.trim();
    const year = releaseYearInput.value.trim();

  if (!title || !director || !year) return;

  await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, director, year }),
  });
  
  handleLoad()
    
}

async function handleEdit() {

    const title = titleInput.value.trim();
    const director = directorInput.value.trim();
    const year = releaseYearInput.value.trim();

     await fetch(`${BASE_URL}/${selectedMovieId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, director, year, _id:selectedMovieId }),
  });

    titleInput.value = '';
    directorInput.value = '';
    releaseYearInput.value = '';

    handleLoad()
    
}

async function handleLoad() {

    const recordsResp = await fetch(BASE_URL);
    const recordsData = await recordsResp.json()
    const recordsArr = Object.values(recordsData);
    

    movieListDiv.innerHTML = ''
    

    recordsArr.forEach(record => {

        const divMovie = document.createElement('div')
        divMovie.classList.add("movie")

        const movieDivContetn = document.createElement('div')
        movieDivContetn.classList.add("content")

        const titlePEl = document.createElement('p')
        titlePEl.textContent = record.title
        const directorPEl = document.createElement('p')
        directorPEl.textContent = record.director
        const yearPEl = document.createElement('p')
        yearPEl.textContent = record.year

        const buttonsDiv = document.createElement('div')

        const changeButton = document.createElement('button')
        changeButton.classList.add("change-btn")
        changeButton.textContent = "Change"

        const deleteButton = document.createElement('button')
        deleteButton.classList.add("delete-btn")
        deleteButton.textContent = "Delete"

        buttonsDiv.appendChild(changeButton)
        buttonsDiv.appendChild(deleteButton)

        movieDivContetn.appendChild(titlePEl)
        movieDivContetn.appendChild(directorPEl)
        movieDivContetn.appendChild(yearPEl)

        divMovie.appendChild(movieDivContetn)
        divMovie.appendChild(buttonsDiv)

        movieListDiv.appendChild(divMovie)
        editMovieButton.disabled = true

        changeButton.addEventListener('click', handleChange)

        deleteButton.addEventListener('click', handleDelete)

        addMovieButton.disabled = false;
        editMovieButton.disabled = true;

        function handleChange(){
            titleInput.value= titlePEl.textContent
            directorInput.value = directorPEl.textContent;
            releaseYearInput.value = yearPEl.textContent;
            selectedMovieId = record._id;
            addMovieButton.disabled = true;
            editMovieButton.disabled = false;

            divMovie.remove()
        }

       
        async function handleDelete(){
            await fetch(`${BASE_URL}/${record._id}`, {
            method: 'DELETE',
        });

            await handleLoad();

        }


        

       
        
    });
}



   

  

    



 


