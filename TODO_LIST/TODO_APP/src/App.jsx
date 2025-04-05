import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);  // State to store todos
  const [input, setInput] = useState("");  // State to store input field value

  // Function to handle adding a new todo
  const addTodo = () => {
    if (input.trim() === "") return; // Prevent adding empty todos

    const newTodo = {
      desc: input,               // Todo description
      completed: false,          // Completion status
      id: Date.now(),            // Unique ID for each todo
    };

    // Update the todos state
    setTodos([...todos, newTodo]);
    setInput(""); // Clear the input field
  };

  // Function to handle deleting a todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);  // Remove todo with the given id
  };

  // Function to handle toggling completion status
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);  // Toggle the completion status of the todo
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add Todo"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)} // Toggle completion status
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.desc}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
