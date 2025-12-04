
// Selecting the container where all todo cards will be displayed
const todo_container = document.getElementById("todo_container");

// Selecting the <template> element used to create todo cards

const todo_card_template =document.querySelector("#todo_card_template");

// Function to display (render) all tasks on the screen

function renderTodo(todoList=[]){
    console.log(todoList);
    
// If there are no tasks, show a message instead of an empty screen

    if(todoList.length <=0){
        todo_container.innerHTML= 
          "<p> No Task available, Add task to see one </p>";
    return;
    }
 //this use to remove duplicate entry

 todo_container.innerHTML = "";

    // Loop through each todo item in the list

  todoList.forEach((el) => {
            // Clone the template content to create a new todo card
    let clone = todo_card_template.content.cloneNode(true);
            // Select the title and deadline inside the cloned template
    let h4 = clone.querySelector("h4");
    let p = clone.querySelector("p");

    // Set dynamic data for each card
     h4.innerText = el.title;  // set task title
     p.innerText = el.deadline; // set task deadline

       // Add the card to the main container

    todo_container.appendChild(clone);
  });
}

export default renderTodo;