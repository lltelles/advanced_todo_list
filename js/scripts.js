// Seleçao de elementos
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancelEditBtn = document.querySelector('#cancel-edit-btn')

// Funçoes
const saveTodo = (text) => {
    // criar uma div
    const todo = document.createElement('div')
    // add class na div
    todo.classList.add('todo')

    // criar h3
    const todoTitle = document.createElement('h3')
    // passar (text) pro h3
    todoTitle.innerText = text
    // add h3 na div
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement('button')
        doneBtn.classList.add('finish-todo')
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
        todo.appendChild(doneBtn)

    const editBtn = document.createElement('button')
        editBtn.classList.add('edit-todo')
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
        todo.appendChild(editBtn)

    const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('remove-todo')
        deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        todo.appendChild(deleteBtn)

        todoList.appendChild(todo)

        todoInput.value = ""
        todoInput.focus()
    
}

// Eventos
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = todoInput.value
    
    if(inputValue) {
        saveTodo(inputValue)
    }
})
