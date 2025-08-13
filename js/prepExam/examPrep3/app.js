window.addEventListener("load", solve);



function solve() {
    const eventInputElement = document.querySelector("#event");
    const noteInputElement = document.querySelector("#note"); 
    const dateInputElement = document.querySelector("#date");
    const buttonSaveFormElement = document.querySelector("#save");
    const upcomingListEl = document.querySelector("#upcoming-list");

    buttonSaveFormElement.addEventListener('click', handleSaveInput);

    function handleSaveInput(e) {
        e.preventDefault();

        const event = eventInputElement.value.trim();
        const note = noteInputElement.value.trim();
        const date = dateInputElement.value.trim();

        if (!event || !note || !date) return;

        // li контейнер
        const eventItemListEl = document.createElement('li');
        eventItemListEl.classList.add("event-item");

        // div контейнер
        const eventContainerDiv = document.createElement('div');
        eventContainerDiv.classList.add("event-container");

        // article + параграфи
        const articleEl = document.createElement('article');
        const pNameEl = document.createElement('p');
        pNameEl.textContent = `Name: ${event}`;
        const pNoteEl = document.createElement('p');
        pNoteEl.textContent = `Note: ${note}`;
        const pDateEl = document.createElement('p');
        pDateEl.textContent = `Date: ${date}`;

        articleEl.appendChild(pNameEl);
        articleEl.appendChild(pNoteEl);
        articleEl.appendChild(pDateEl);
        eventContainerDiv.appendChild(articleEl);

        // бутони
        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        const editButtonEl = document.createElement('button');
        editButtonEl.classList.add("btn", "edit");
        editButtonEl.textContent = "Edit";

        editButtonEl.addEventListener('click', handleEdit)

        const doneButtonEl = document.createElement('button');
        doneButtonEl.classList.add("btn", "done");
        doneButtonEl.textContent = "Done";

        doneButtonEl.addEventListener('click', handleDone)

        buttonsDiv.appendChild(editButtonEl);
        buttonsDiv.appendChild(doneButtonEl);
        eventContainerDiv.appendChild(buttonsDiv);

        // добавяме към li и към списъка
        eventItemListEl.appendChild(eventContainerDiv);
        upcomingListEl.appendChild(eventItemListEl);

        // изчистване на формата
        eventInputElement.value = "";
        noteInputElement.value = "";
        dateInputElement.value = "";

        function handleEdit(){

            eventInputElement.value = event;
            noteInputElement.value = note;
            dateInputElement.value = date;

            eventItemListEl.remove();
        }

        function handleDone(){
            const eventsListEl = document.querySelector("#events-list")
          
            const deleteButton = document.querySelector("#events > button")
            deleteButton.classList.add('btn', 'delete');
            //eventItemListEl.appendChild(deleteButton);
            eventsListEl.appendChild(eventItemListEl)
            
            
            editButtonEl.remove();
            doneButtonEl.remove(); 

            console.log("delete button")

            console.log(deleteButton); 

            

            

              deleteButton.addEventListener('click', () => {
                
            eventItemListEl.remove();
        });


        }

    }
}

