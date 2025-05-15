import { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import FilterBar from './FilterBar';
import '../styles/TodoApp.css';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load tasks from backend on mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch('http://localhost:3000/tasks');
        const data = await res.json();
        setTasks(data);
        localStorage.setItem('tasks', JSON.stringify(data)); // optional
      } catch (err) {
        console.error('Failed to load tasks:', err);

        // fallback: load from localStorage if backend fails
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
          setTasks(JSON.parse(savedTasks));
        }
      }
    };

    fetchTasks();
  }, []);

  // Save tasks to localStorage when they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task and sync with backend
  const addTask = async (title) => {
    if (title.trim() === '') return;

    const newTask = {
      title,
      completed: false,
      createdAt: new Date().toISOString()
    };

    try {
      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask)
      });

      const savedTask = await res.json();
      setTasks([...tasks, savedTask]);
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  // Toggle completion and optionally sync with backend
  const toggleComplete = async (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

    // Optional: send PUT or PATCH to backend if needed
  };

  // Delete a task and optionally sync with backend
  const deleteTask = async (id) => {
    setTasks(tasks.filter(task => task.id !== id));

    // Optional: send DELETE to backend if needed
  };

  // Filter tasks
  const filteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoInput onAddTask={addTask} />
      <FilterBar currentFilter={filter} onFilterChange={setFilter} />
      <TodoList
        tasks={filteredTasks()}
        onToggleComplete={toggleComplete}
        onDeleteTask={deleteTask}
      />
      <div className="task-stats">
        <p>{tasks.filter(task => !task.completed).length} tasks left</p>
      </div>
    </div>
  );
}

export default TodoApp;
