import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('low');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false, priority }]);
      setNewTask('');
      setPriority('low');
    }
  };

  const handleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleTaskRemoval = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Japanese Learning To-Do App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={handleInputChange}
        />
        <select value={priority} onChange={handlePriorityChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.completed ? 'completed' : ''}
            onClick={() => handleTaskCompletion(index)}
          >
            <span className={`priority ${task.priority}`}></span>
            {task.text}
            <button onClick={() => handleTaskRemoval(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
