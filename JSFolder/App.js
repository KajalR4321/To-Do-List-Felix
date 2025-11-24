
console.log(window);
//it is use for automatic load 
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("loggedIn")) {
    console.log("hello");
    window.location.href = "login.html";
    return;
  }
// Get the list of all registered users
  let userList =
    JSON.parse(localStorage.getItem("userList")) || [];
    
// Get the email of the currently logged-in user

  let user_email = localStorage.getItem("user_email") || "";

// Find the matching user object using the email

  let user_data = userList.find(
    (user) => user.email === user_email
  );

  //  displaying the user name
  document.getElementById("user_name").innerText =
    user_data.name || "user";

  //  modal logic
  const add_form_modal = document.getElementById(
    "add_form_modal"
  );
  const add_todo_btn =
    document.getElementById("add_todo_btn");
  const close_btn = document.getElementById("close_btn");
//use for model or pop out
  add_todo_btn.addEventListener("click", () => {
    add_form_modal.showModal();
  });
  close_btn.addEventListener("click", () => {
    add_form_modal.close();
  });

  //  showing todo list

  const todo_container = document.getElementById(
    "todo_container"
  );

  if (user_data.todo.length > 0) {
    //  if data avaliable map it in html
  }// If no tasks available → show message
  else {
    todo_container.innerHTML =
      "<p> No Task available, Add task to see one </p>";
  }
});
