import { useState } from 'react';
import '../styles/TodoInput.css';

function TodoInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
        aria-label="Add a new task"
      />
      <button type="submit" aria-label="Add task">
        Add
      </button>
    </form>
  );
}

export default TodoInput;