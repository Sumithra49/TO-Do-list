import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
