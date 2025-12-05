import { addTodo } from "./Add-todo.js";
import renderTodo from "./renderTodo.js";
console.log(window);
//it is use for automatic load
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("loggedIn")) {
    console.log("hello");
    window.location.href = "login.html";
    return;
  }

  // Set minimum date-time to current moment

  const now = new Date();
const localNow = now.toISOString().slice(0, 16);
document.getElementById("deadline").min = localNow

  //use logout button so remove name email

  document.getElementById("logout_btn").addEventListener("click", () => {
    localStorage.removeItem("user_email");
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
  });

  // Get the list of all registered users/ calling user data
  let userList = JSON.parse(localStorage.getItem("userList")) || [];

  // Get the email of the currently logged-in user

  let user_email = localStorage.getItem("user_email") || "";
  //dought
   function dataUpdate() {
    let userList =
      JSON.parse(localStorage.getItem("userList")) || [];

    return userList;
  }

  userList = dataUpdate();

  let indexValue = userList.findIndex(
    (el) => el.email === user_email
  );


  // Find the matching user object using the email/display the username

  let user_data = userList.find((user) => user.email === user_email);

  //  displaying the user name
  document.getElementById("user_name").innerText = user_data.name || "user";

  //  modal logic
  const add_form_modal = document.getElementById("add_form_modal");
  const add_todo_btn = document.getElementById("add_todo_btn");
  const close_btn = document.getElementById("close_btn");
  //use for model or pop out
  add_todo_btn.addEventListener("click", () => {
    add_form_modal.showModal();
  });
  close_btn.addEventListener("click", () => {
    add_form_modal.close();
  });

  //  showing todo list

  const todo_container = document.getElementById("todoboard");

  if (user_data.todo.length > 0) {
    //  if data avaliable map it in html
  } // If no tasks available → show message
  else {
    todo_container.innerHTML =
      "<p> No Task available, Add task to see one </p>";
  }
  //add todo logic
  document.getElementById("add_todo_form").addEventListener("submit", (e) => {
    e.preventDefault();
    //dought
    addTodo(user_data.todo);
    userList[indexValue] = user_data;
    //store local storage
    localStorage.setItem("userList", JSON.stringify(userList));
// this render call because when i add todo the data is not stored in local storage when i refresh the store so i use this call i dont refresh the page
renderTodo(user_data.todo)
  });
    //  show todo
  renderTodo(user_data.todo);

 //Edit form 
 
const edit_todo_form = document.getElementById("edit_todo_form");

// When user submits the edit form
edit_todo_form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload on form submit

  // Update the todo inside the user's todo list
  let newTodo = editFormMethod(user_data.todo);

  // Replace the updated user data back into the main userList array
  userList[indexValue] = user_data;

  // Save updated userList back to localStorage
  localStorage.setItem(
    "userList",
    JSON.stringify(userList)
  );

  // Re-render the todo list on UI after editing
  renderTodo(user_data.todo);
});


});
