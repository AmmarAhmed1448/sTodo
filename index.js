const inputTitle = document.getElementById("input-title");
const inputTodo = document.getElementById("input-todo");


function createCard(){

    
    const inputTitleValue = inputTitle.value
    const inputTodoValue = inputTodo.value


    const cardDiv = document.createElement("div")
    Object.assign(cardDiv, {
        className: "card",
    })
    const containerDiv = document.createElement("div")
    Object.assign(containerDiv, {
        className: "container"
    })
    const titleH4 = document.createElement("h4")
    const titleBold = document.createElement("b")
    titleBold.innerText = inputTitleValue

    const todo = document.createElement("p");
    todo.innerText = inputTodoValue
    Object.assign(todo, {
        className: "todo-text"
    })


    const editBtn = document.createElement("input");
    Object.assign(editBtn, {
        type: "button",
        value: "Edit"
    })

    editBtn.setAttribute("onclick", "createTodo(event)");


    const deleteBtn = document.createElement("input");
    Object.assign(deleteBtn, {
        type: "button",
        value: "Delete"
    })
    deleteBtn.setAttribute("onclick", "deleteTodo(event)");

    document.body.appendChild(cardDiv);
    cardDiv.appendChild(containerDiv)
    containerDiv.appendChild(titleH4)
    titleH4.appendChild(titleBold)
    containerDiv.appendChild(todo)
    containerDiv.appendChild(editBtn)
    containerDiv.appendChild(deleteBtn)
}


function createTodo(){
    createCard();
}


function saveTodo(e) {
    const parElement = e.target.parentElement;
    parElement.querySelector("h4 b").innerText = inputTitle.value;
    parElement.getElementsByClassName("todo-text")[0].innerText = inputTodo.value;


    const button = document.querySelector('.todo-form input[type="button"]');
    button.value = "Create";

}



function edit(e){
    const todoForm = document.getElementsByClassName("todo-form")[0];
    const button = todoForm.querySelector('input[type="button"]')
    button.value = "Save";
    button.onclick = function() {
        saveTodo(e);
    }
    // console.log(e.target)
    const parElement = e.target.parentElement;
    const title = parElement.querySelector("h4 b").innerText;
    const text = parElement.getElementsByClassName("todo-text")[0].innerText;



    inputTitle.value = title;
    inputTodo.value = text;

    console.log(inputTitle.value)
    console.log(inputTodo.value)


    
}


function deleteTodo(e) {
    const cardToDelete = e.target.parentElement;
    cardToDelete.remove();
}
