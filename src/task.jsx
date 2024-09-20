import React, { useState, useEffect } from 'react';

// TaskInput component for adding tasks
function TaskInput({ addTask }) {
  // State to track the input value (controlled component)
  const [taskName, setTaskName] = useState('');

  // Event handler for input change
  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      addTask(taskName); // Call the addTask function from props
      setTaskName(''); // Clear input after submitting
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={handleChange}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

// TaskList component for displaying tasks
function TaskList({ tasks, completeTask, deleteTask }) {
  return (
    <ul>
      {tasks.length === 0 ? (
        <p>No tasks available! Start by adding a task.</p>
      ) : (
        tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.name}
            </span>
            <button onClick={() => completeTask(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))
      )}
    </ul>
  );
}

// Main App component
function TaskApp() {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);

  // useEffect to log when a task is added or removed
  useEffect(() => {
    if (tasks.length > 0) {
      console.log('Tasks updated:', tasks);
    }
  }, [tasks]);

  // Function to add a new task
  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(), // Unique ID
      name: taskName,
      completed: false, // Initially not completed
    };
    setTasks([...tasks, newTask]); // Add task to state
  };

  // Function to complete a task
  const completeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // Remove task from state
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <TaskInput addTask={addTask} /> {/* Pass the addTask function as a prop */}
      <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
    </div>
  );
}

export default TaskApp;
