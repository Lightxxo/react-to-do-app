import './AddTask.css';
import { useState } from 'react';

export default function AddTask({ addTask }) {
    // Local state for the form fields
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskName && taskDescription && dueDate) {
            const newTask = {
                taskName,
                taskDescription,
                dueDate,
            };

            // Pass the new task to the parent component to update the state
            addTask(newTask);

            // Reset the form
            setTaskName('');
            setTaskDescription('');
            setDueDate('');
        }
    };

    return (
        <div className="add-task-container">
            <h1>Add Task</h1>

            <form className="add-task-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="task-name">Task Name</label>
                    <input
                        type="text"
                        id="task-name"
                        name="task-name"
                        placeholder="Enter task name"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="task-description">Description</label>
                    <textarea
                        id="task-description"
                        name="task-description"
                        placeholder="Enter task description"
                        rows="4"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                
                <div className="form-group">
                    <label htmlFor="due-date">Due Date</label>
                    <input
                        type="date"
                        id="due-date"
                        name="due-date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <button type="submit" className="submit-btn">Add Task</button>
                </div>
            </form>
        </div>
    );
}
