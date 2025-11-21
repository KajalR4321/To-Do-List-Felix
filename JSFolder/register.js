import UserClass from "./user.js";

// Wait until the HTML page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form"); // Get the <form> element

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload after form submit

    // Get user input values( valuetrim use for remove extra space)
    const name = document.getElementById("name").value.trim().toLowerCase();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();
    const confirm_password = document.getElementById("confirm_password").value.trim();

    // Check password and confirm password match
    if (password !== confirm_password) {
      alert("Password does not match");
      return;
    }

    // Retrieve existing users from localStorage
    let userList = JSON.parse(localStorage.getItem("userList")) || [];

    // Check if email already exists(some is the part of array )
    let userExists = userList.some((user) => user.email === email);

    console.log(userExists); // Debugging: true/false

    if (userExists) {
      alert("Email already taken, try another!");
      return;
    }

    // Create new user object using UserClass
    let newUser = new UserClass(name, email, password);

    // Add new user to array
    userList.push(newUser);

    // Save updated user list back into localStorage
    localStorage.setItem("userList", JSON.stringify(userList));

    alert("User registered successfully. Redirecting to the login page!");

    // Redirect user to login page
    window.location.href = "login.html";
  });
});
