import React from "react";

function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>X</button>
    </li>
  );
}

export default TodoItem;