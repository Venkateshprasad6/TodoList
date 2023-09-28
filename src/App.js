import React from "react";
import NewTodoForm from "./NewTodoForm/NewTodoForm";
import Todo from "./Todo/Todo"
import TodoList from "./TodoList/TodoList";
import "./App.css";
function App() {
  return (
    <div className="App">
      <TodoList />
      <NewTodoForm />
      <Todo />
    </div>
  );
}

export default App;
