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

// complete the task 
export const checkTodo = (todoList, titleToCheck) => {
  let data = todoList.filter((el)=> el.title === titleToCheck)
  console.log(data)
  if(data[0].complete){
    data[0].complete = false;
  }else{
    data[0].complete = true;
  }

  let index_num = todoList.findIndex(el => el.title === titleToCheck)

  todoList[index_num] = data[0]
user_data.todo = todoList
  userList[indexValue] = user_data
  localStorage.setItem("userList", JSON.stringify(userList))
  renderTodo(todoList)
  
}