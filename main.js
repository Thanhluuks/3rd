let todoItems = [];

function rederTodo (todo) {
    const ischecked = todo.checked ? "ok" : "";
    const list = document.querySelector(".list-tasks") ;
    const item = document.createElement("li");
    item.className = "list-tasks-item"
    item.innerHTML = `
    <div class="app_creat-status-non"></div>
    <span class="list-tasks-item-content list-tasks-item-content--${ischecked}">${todo.text}</span>
    `;
    list.prepend(item);
}


function addTodo (text) {
    const todo ={ 
        text,
        checked: false,
        id: Date.now(),
    };
    todoItems.push(todo);
    rederTodo(todo);
};

const form = document.querySelector(".form-input");
form.addEventListener ("submit", e => {
    e.preventDefault();
    const input = document.querySelector(".app_creat-input");
    const text = input.value.trim();
    if (text !== "") {
    addTodo(text);
    input.value="";
    input.focus();
    }
});
