import './ShowTasks.css'
export default function ShowTasks({ tasks = []}) {
    console.log('TASKS:', tasks);
    return (
      <div className="show-tasks-container">
        <p>ALL TASKS:</p>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="show-tasks-item">
              <p className="task-name">Task Name: {task.taskName}</p>
              <p className="task-description">Description: {task.taskDescription}</p>
              <p className="due-date">Due Date: {task.dueDate}</p>
            </div>
          ))
        ) : (
          <p className="no-tasks-message">No tasks available</p>
        )}
      </div>
    );
  }
  