let todoItems = [];

// Render todo
function rederTodo (todo) {
    const itemCheck = document.querySelector(`[data-key = '${todo.id}']`);
    const ischecked = todo.checked ? "ok" : "";
    const list = document.querySelector(".list-tasks") ;
    const item = document.createElement("li");
    item.className = "list-tasks-item";
    item.setAttribute('data-key', todo.id);
    item.innerHTML = `
    <div class="app_creat-status-non app_creat-status-${ischecked}"></div>
    <span class="list-tasks-item-content list-tasks-item-content--${ischecked}">${todo.text}</span>
    `;
    if (itemCheck) {
        list.replaceChild(item, itemCheck)
    }
    else {
    list.prepend(item);
    }
    setRemain();
}

// Set item remain
function setRemain () {
    const remain = document.querySelector('.app_creat-status-no');
    const num = todoItems.filter (item => item.checked !=true).length;
    remain.innerHTML =`
    ${num} items left
    `;
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

function toggleOk (key) {
    const index = todoItems.findIndex(item => item.id == Number(key));
    todoItems[index].checked = !todoItems[index].checked;
    rederTodo(todoItems[index]);
    setRemain();
}
 
// Get input to todo
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
const add = document.querySelector('.app_creat-status-add');
add.addEventListener ('click', e => {
    e.preventDefault();
    const input = document.querySelector(".app_creat-input");
    const text = input.value.trim();
    if (text !== "") {
    addTodo(text);
    input.value="";
    input.focus();
    }
})

// Change status todo to OK
const list = document.querySelector(".list-tasks");
list.addEventListener('click', event => {
    if (event.target.classList.contains("app_creat-status-non")) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleOk (itemKey);
    }
});

const clear = document.querySelector('.list-tasks-item-clear');
clear.addEventListener('click', e => {
    const todoOK = document.querySelectorAll('.list-tasks-item-content--ok');
    console.log(todoOK);
    todoOK.forEach( e => e.parentElement.remove());
})

