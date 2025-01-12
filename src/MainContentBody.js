import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTask from './AddTask';
import ShowTasks from './ShowTasks';
import CompletedTasks from './CompletedTasks';
import IGaveUp from './IGaveUp';

export default function MainContentBody() {
    
    const [tasks, setTasks] = useState([]);

    
    const addTask = (task) => {
        setTasks(prevTasks => [...prevTasks, task]); 
    };

    return (
        <Routes>
          <Route path="/" element={<ShowTasks />} />
          <Route path="/show_tasks" element={<ShowTasks tasks={tasks}/>} />
          <Route path="/add_task" element={<AddTask addTask={addTask} />} />
          <Route path="/completed_tasks" element={<CompletedTasks />} />
          <Route path="/i_gave_up" element={<IGaveUp />} />
        </Routes>
      );
    
}


