import renderTodo from "./renderTodo.js";
import Todo  from "./Todo.js";
let user_email = localStorage.getItem("user_email") || "";
  //dought
   function dataUpdate() {
    let userList =
      JSON.parse(localStorage.getItem("userList")) || [];

    return userList;
  }

  let userList = dataUpdate();

  let indexValue = userList.findIndex(
    (el) => el.email === user_email
  );
 let user_data = userList.find((user) => user.email === user_email);
export const deleteTodo = (todoList, titleToDelete) => {
  const updatedList = todoList.filter(todo => todo.title !== titleToDelete);
  user_data.todo = updatedList
  userList[indexValue] = user_data
  localStorage.setItem("userList", JSON.stringify(userList))
  console.log("delete", updatedList)
  renderTodo(updatedList)
};

