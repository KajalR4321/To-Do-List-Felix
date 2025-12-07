import Todo  from "./Todo.js";

export const deleteTodo = (todoList, titleToDelete) => {
  const updatedList = todoList.filter(todo => todo.title !== titleToDelete);

  // save updated list correctly
  localStorage.setItem("todo", JSON.stringify(updatedList));

  return updatedList;
};

