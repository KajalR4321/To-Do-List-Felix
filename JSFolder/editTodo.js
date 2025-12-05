import Todo  from "./Todo.js";

// Get the edit modal element
let edit_form_modal = document.getElementById("edit_form_modal");

// Close button logic for edit modal
document
  .getElementById("edit_close_btn")
  .addEventListener("click", () => {
    edit_form_modal.close(); // Close the dialog box
  });

// Input fields inside the edit form
const title = document.getElementById("edit_task_title");
const description = document.getElementById("edit_description");
const priority = document.getElementById("edit_priority");
const deadline = document.getElementById("edit_deadline");

// This variable stores the old title so we can find and update the correct todo
let oldTitle = "";

// /** */ 
//  * Function to open the edit modal and load existing todo data
//  */
export const editTodo = (todo) => {
  edit_form_modal.showModal(); // Show edit modal

  // Fill input fields with existing todo data
 title.value = todo.title;
  description.value = todo.description;
  priority.value = todo.priority;
  deadline.value = todo.deadline;

  // Store old title to find the correct item later
  oldTitle = todo.title;
};

/**
 * Function to update the edited todo item
 * @param {Array} todoList - The list of all todos
 * @returns updated todoList
 */
export const editFormMethod = (todoList) => {
  const new_title = title.value;
  const new_description = description.value;
  const new_deadline = deadline.value;
  const new_priority = priority.value;

  // Validation: title should not be empty
  if (new_title.length <= 0) {
    alert("Todo title cannot be empty");
    return;
  }

  // Find index of the old todo using the stored title
  let index_number = todoList.findIndex(
    (el) => el.title === oldTitle
  );

  // Create a new todo object with updated values
  let updatedTodo = new Todo(
    new_title,
    new_description,
    new_priority,
    new_deadline
  );

  // Replace the old todo with updated one
  todoList[index_number] = updatedTodo;

  return todoList; // Return updated list
};
