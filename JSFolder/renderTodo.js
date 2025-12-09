import { editTodo } from "./editTodo.js";
import { deleteTodo } from "./delete.js";
// Selecting the container where all todo cards will be displayed
const todo_container = document.getElementById("todoboard");

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
  let div = clone.querySelector('div')
  //it use when priority is change then color also change
  switch (el.priority){
    case "P1":
      div.classList+= " critical"
      break ;
      case "P2":
      div.classList+= " Heigh"
      break;
       case "P3":
      div.classList+= " Medium"
      break;
       case "P4":
      div.classList+= " Low"
      break;
  }
  // Select the title and deadline inside the cloned template
  let h4 = clone.querySelector("h4");
  let p = clone.querySelector("p");
  let span= clone.querySelector("span");
    

  // Fill values
  h4.textContent = el.title;
  p.textContent = el.deadline;
     // FIXED EDIT BUTTON
    clone.querySelector(".edit_btn").addEventListener("click", () => {
      editTodo(el);
    });
     // FIXED delete BUTTON
   clone.querySelector(".delete_btn").addEventListener("click", () => {
    deleteTodo(todoList, el.title);  // call your delete function     
   
    });

  // Append to container
  todo_container.appendChild(clone);
});
}

export default renderTodo;