const textform = document.querySelector(".form1");
const todoTextuserinput = document.querySelector("#todo-item");

const todoListi = document.querySelector(".todolist1");
// const todos = ["chips"];

const todos = [];

function drawToDoList() {
  // Clear all of the entries in the list
  while (todoListi.firstChild) {
    todoListi.removeChild(todoListi.firstChild);
  }

  for (let i = 0; i < todos.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = todos[i].text;

    if (todos[i].isDone === true) {
      listItem.classList.add("done");
    }

    const todoDeleteButton = document.createElement("button");
    todoDeleteButton.textContent = "Delete";
    todoDeleteButton.classList.add("todoDeleteButton");

    todoDeleteButton.dataset.index = i;

    todoDeleteButton.addEventListener("click", deleteTodo);

    const todoDoneButton = document.createElement("button");

    if (todos[i].isDone === true) {
      todoDoneButton.textContent = "UnDone";
    } else {
      todoDoneButton.textContent = "Done";
    }
    

    todoDoneButton.dataset.index = i;

    todoDoneButton.addEventListener("click", doneTodo);

    listItem.appendChild(todoDoneButton);
    listItem.appendChild(todoDeleteButton);

    todoListi.appendChild(listItem);
  }
}

function doneTodo(event) {
  console.log("Marked as done");

  todoDeleteIndex = event.target.dataset.index;

  console.log("INDEX: ", todoDeleteIndex);

  todos[todoDeleteIndex].isDone = !todos[todoDeleteIndex].isDone;

  console.log(todos);

  drawToDoList();
}

function deleteTodo(event) {
  console.log("Delete button index", event.target.dataset.index);

  todoDeleteIndex = event.target.dataset.index;

  todos.splice(todoDeleteIndex, 1);

  drawToDoList();
}

function addTodo(event) {
  event.preventDefault();

  todoTextuserinput.value;

  // todos.push(todoTextFromForm.value);

  todos.push({
    text: todoTextuserinput.value,
    isDone: false,
  });

  console.log(todos);

  textform.reset();

  drawToDoList();
}

textform.addEventListener("submit", addTodo);

let appContain = document.getElementById(appID);

function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContain) {
    console.error("Error: Could not find application container");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("header 1");
  h1.innerText = headingText;
  appContain.appendChild(h1);

  // Init complete
  console.log("App was successfully initialised");
}