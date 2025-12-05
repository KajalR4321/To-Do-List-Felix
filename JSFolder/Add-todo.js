import Todo from "./Todo.js";

export const addTodo = (todoList) => {
  const title = document.getElementById("task_title").value.trim();

  const description = document.getElementById("description").value.trim();
  const deadline = document.getElementById("deadline").value.trim();



  const priority = document.getElementById("priority_filter").value.trim();
// this will use title cant be empty or same as previous
if(title<=0){
    alert("todo cannot be empty");
    return;
}
//this give not repeted or same i use found method or also use filter method el-> element
let found =todoList.some((el) =>el.title===title);
if(found){
    alert("task alredy added,try another!");
    return;
}
//accses all todo list from todo.js
let newTodo= new Todo(title, description, deadline, priority);

todoList.push(newTodo)
};

