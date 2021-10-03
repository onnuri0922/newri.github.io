const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

const todos = [];

function saveTodo(){
    localStorage.setItem("todo",JSON.stringify(todos));
}

function writeTodo(newTodo){
    const list = document.createElement("li");
    const span = document.createElement("span");
    list.appendChild(span);
    span.innerText = newTodo;

    todoList.appendChild(list);
}


function handleListSubmit(e){
    e.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value = "";

    todos.push(newTodo);
    writeTodo(newTodo);
    saveTodo();

}
todoForm.addEventListener("submit",handleListSubmit);

const savedTodos = localStorage.getItem("todo");
if(savedTodos !== null){
    const arrTodo = JSON.parse(savedTodos);
    arrTodo.forEach(writeTodo);
}