// this event run the whole html page is loaded completely
document.addEventListener("DOMContentLoaded",()=>{
   
    //selecting the form tag from html
    const from =document.querySelector("form");

    //Adding submit button event to the form

    from.addEventListener("submit", (e)=>
    {
       e.preventDefault();
     // This stops form from refreshing the page

    // Getting email value from input field
    const email = document.getElementById('email').value.trim().toLowerCase()
 // trim() removes spaces
      // toLowerCase() makes email lowercase for matching

      const password=document.getElementById('password').value.trim().toLowerCase()

      // Getting all users stored in localStorage
    // If no user found → return empty array []
    let userList= JSON.parse(localStorage.getItem("userList"))||[];

        // Checking if email + password exists in stored users
        let userExit= userList.find(
            (user) => user.email===email && user.password === password
        );
        console.log(userExit);
        // If user not found → show error message
    if (!userExit) {
      alert("Username and password do not match, Try Again!");
      return;
    }
     // If user found → saving login details
    localStorage.setItem("user_email", userExit.email);
    
 
    localStorage.setItem("name", userExit.name);
   

    localStorage.setItem("loggedIn", true);
    
    window.location.href = "index.html";
});


 
})