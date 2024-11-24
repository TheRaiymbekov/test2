import React, { useState } from "react";
import myImage from "./img/Vector.png"
import icon from "./img/icon.png"

function ToDoApp() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingText, setEditingText] = useState("");

    const addTask = () => {
        if (!newTask.trim()) return;
        setTasks([...tasks, newTask]);
        setNewTask("");
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const clearAllTasks = () => {
        setTasks([]);
    };

    const startEditing = (index) => {
        setEditingIndex(index);
        setEditingText(tasks[index]);
    };

    const saveTask = () => {
        const updatedTasks = tasks.map((task, index) =>
            index === editingIndex ? editingText : task
        );
        setTasks(updatedTasks);
        setEditingIndex(null);
        setEditingText("");
    };

    return (
        <div className="todo-app">
            <h1>TO DO</h1>
            <div className="todo-input">
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />

                <div className="buttons">
                    <button onClick={addTask} className="add-task">
                        Add Task
                    </button>
                    <button onClick={clearAllTasks} className="clear-all">
                            Clear All
                        </button>
                </div>
            </div>
            <div className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        {editingIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editingText}
                                    onChange={(e) => setEditingText(e.target.value)}
                                />
                                <div className="buttons2">
                                    <button onClick={() => setEditingIndex(null)} className="cancel-task">
                                        Cancel
                                    </button>
                                    <button onClick={saveTask} className="save-task">
                                        Save
                                    </button>
                                </div>
                            </>


                        ) : (
                            <>

                                <div className="task-actions">
                                    <span>{task}</span>
                                    <div className="buttons1">
                                        <button onClick={() => startEditing(index)} className="edit-task">
                                            <img src={myImage} alt="image"/>
                                        </button>
                                        <button onClick={() => deleteTask(index)} className="delete-task">
                                            <img src={icon} alt="image"/>
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </div>

        </div>
    );
}

export default ToDoApp;
