import { useState } from 'react';

const TodoInput = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() !== '') {
      addTask(text);
      setText('');
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Enter a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
