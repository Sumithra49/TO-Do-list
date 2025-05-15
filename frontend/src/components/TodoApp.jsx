import { useEffect, useState } from 'react';
import FilterBar from './FilterBar';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <h1>To-Do App</h1>
      <TodoInput addTask={addTask} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <TodoList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TodoApp;
