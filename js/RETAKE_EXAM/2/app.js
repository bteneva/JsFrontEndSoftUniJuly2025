window.addEventListener("load", solve);

function solve(){
    const placeInputEl = document.querySelector("#place");
    const actionInputEl = document.querySelector("#action");
    const personInputEl = document.querySelector("#person");

    const addButtonEl = document.querySelector("#add-btn");
    addButtonEl.addEventListener('click', handleAdd);

    const taskUlEl = document.querySelector("#task-list");

    const doneTasksUlEl = document.querySelector("#done-list")

    function handleAdd(e){
        
        e.preventDefault();

        const place = placeInputEl.value.trim();
        const action = actionInputEl.value.trim();
        const person = personInputEl.value.trim();

        if (!place || !action || !person ){
            return;
        }

        const taskLiEl = document.createElement('li');
        taskLiEl.classList.add("clean-task")

        const articleEl = document.createElement('article')
        const placePEl = document.createElement('p');
        placePEl.textContent = `Place:${place}`;
        const actionPEl = document.createElement('p');
        actionPEl.textContent = `Action:${action}`;
        const personPEl = document.createElement('p');
        personPEl.textContent = `Person:${person}`;

        articleEl.appendChild(placePEl);
        articleEl.appendChild(actionPEl);
        articleEl.appendChild(personPEl);

        const editButtonEl = document.createElement('button');
        editButtonEl.classList.add('edit');
        editButtonEl.textContent = "Edit"
        editButtonEl.addEventListener('click', handleEdit)

        const doneButton = document.createElement('button');
        doneButton.classList.add('done');
        doneButton.textContent = "Done"
        doneButton.addEventListener('click', handleDone)

        const buttonDivEL = document.createElement('div');
        buttonDivEL.classList.add('buttons');

        buttonDivEL.appendChild(editButtonEl);
        buttonDivEL.appendChild(doneButton);

        taskLiEl.appendChild(articleEl);

        taskLiEl.appendChild(buttonDivEL);

        taskUlEl.appendChild(taskLiEl);

        placeInputEl.value = "";
        actionInputEl.value = "";
        personInputEl.value = "";

        function handleEdit(){

            placeInputEl.value = place;
            actionInputEl.value = action;
            personInputEl.value = person;

            taskLiEl.remove();

        }

        function handleDone(){
            doneTasksUlEl.appendChild(taskLiEl);
            
            buttonDivEL.remove()
            

            const deleteButton = document.createElement('button');
            deleteButton.classList.add("delete");
            deleteButton.textContent = "Delete";
            taskLiEl.appendChild(deleteButton);
            deleteButton.addEventListener('click', handleDelete);

            function handleDelete(){
                taskLiEl.remove();
            }


        }

    }

    
}