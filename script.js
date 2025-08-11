const todoInput = document.getElementById("todo-input");
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const total = document.getElementById("total");
const completed = document.getElementById("completed");

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputValue = todoInput.value.trim();
    if (inputValue === "") return;

    // Writing a function for updating the count
    function count() {
        // Updating the count for the Total Taks
        const totalTasks = todoList.querySelectorAll("li").length;
        total.textContent = totalTasks;

        const completedTasks = todoList.querySelectorAll(".completed").length;
        completed.textContent = completedTasks;
    }



    // Creating list dynamically
    const listItem = document.createElement("li");

    // Creating checkbox dynamically
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "cbox";

    // dynamically checking whether the checkbox is checked or not
    checkbox.addEventListener("change", function(){
        listItem.classList.toggle("completed"); 
        // for class there is inbuilt property toggle check whether it is checked or not
        // and assining completed classname dynamically for li class will added and removed
        count();
    })

    // create a span to hold the task text
    const taskText = document.createElement("span");
    taskText.textContent = inputValue;

    const delButton = document.createElement("button");

    delButton.className = "del-btn";
    delButton.textContent = "Delete";

    // creating Edit Button dynamically
    const editButton = document.createElement("Button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";


    // appending to the listitems(li)
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    todoInput.value = '';
    // listItem.appendChild(editButton);
    // listItem.appendChild(delButton);
    // appending not needed because i made a group of btns


    // Appending to the Unordered LIst
    todoList.appendChild(listItem);

    // EditButton functionality
    editButton.addEventListener("click", function () {
        const newValue = prompt("Edit Your Task: ", taskText.textContent);
        if (newValue !== null) {
            taskText.textContent = newValue.trim();
        }
    })

    // DeleteButton functionality
    delButton.addEventListener("click", function () {
        todoList.removeChild(listItem);
    })


    // Buttons group creating div so that we can use flex and make it more realistic
    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");
    btnGroup.appendChild(editButton);
    btnGroup.appendChild(delButton);
    listItem.appendChild(btnGroup);
    count();
})
