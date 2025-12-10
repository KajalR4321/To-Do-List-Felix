import renderTodo from "./renderTodo.js";

const priority_filter = document.getElementById(
  "priority_filtring"
);
const status_filter =
  document.getElementById("satus_filter");
const search_filter =
  document.getElementById("search_filter");

function applyFilters(user_data) {
  console.log(user_data);
  let filtered = user_data;

  if (priority_filter.value !== "") {
    filtered = filtered.filter(
      (todo) => todo.priority === priority_filter.value
    );
  }
  if (status_filter.value === "completed") {
    filtered = filtered.filter(
      (todo) => todo.completed === true
    );
  }
  if (status_filter.value === "pending") {
    filtered = filtered.filter(
      (todo) => todo.completed === false
    );
  }

  if (search_filter.value.trim() !== "") {
    const keyword = search_filter.value
      .trim()
      .toLowerCase();
    filtered = filtered.filter((todo) =>
      todo.title.toLowerCase().includes(keyword)
    );
  }

  renderTodo(filtered);
}

export default applyFilters;