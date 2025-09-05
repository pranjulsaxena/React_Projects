import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);  
  const [input, setInput] = useState("");  

  const addTodo = () => {
    if (input.trim() === "") return; 

    const newTodo = {
      desc: input,               
      completed: false,          
      id: Date.now(),            
    };

    
    setTodos([...todos, newTodo]);
    setInput(""); 
  };

  
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);  
  };

  
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);  
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
