import '../styles/TodoItem.css';

function TodoItem({ task, onToggleComplete, onDeleteTask }) {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          aria-label={`Mark "${task.title}" as ${task.completed ? 'incomplete' : 'complete'}`}
        />
        <span className="task-title">{task.title}</span>
      </div>
      <button 
        className="delete-btn"
        onClick={() => onDeleteTask(task.id)}
        aria-label={`Delete task "${task.title}"`}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;