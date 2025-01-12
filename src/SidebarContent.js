import './SidebarContent.css';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SidebarContent() {
  const [iconColor, setIconColor] = useState('');
  const [activeItem, setActiveItem] = useState('show_tasks'); // Default active item
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the placeholder icon color from the CSS variable
  useEffect(() => {
    const placeholderColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--placeholder-icon-color')
      .trim();
    console.log('Icon color retrieved:', placeholderColor); // Debugging
    setIconColor(placeholderColor.slice(1)); // Set the color without '#'
  }, []);

  // Effect to update active state based on the current route
  useEffect(() => {
    console.log('Current path:', location.pathname); // Debugging path change
    if (location.pathname === '/add_task') {
      setActiveItem('add_task');
    } else if (location.pathname === '/' || location.pathname === '/show_tasks') {
      setActiveItem('show_tasks');
    } else if (location.pathname === '/completed_tasks') {
      setActiveItem('completed_tasks');
    } else if (location.pathname === '/i_gave_up') {
      setActiveItem('i_gave_up');
    }
  }, [location.pathname]);

  const handleItemClick = (item, route) => {
    setActiveItem(item);
    navigate(route);
  };

  return (
    <div className="sidebar-content">
      <div className="sidebar-content-items">
        <div
          className={`sidebar-content-item ${activeItem === 'show_tasks' ? 'active' : ''}`}
          onClick={() => handleItemClick('show_tasks', '/show_tasks')}
        >
          <img
            src={`https://img.icons8.com/?size=100&id=83186&format=png&color=${iconColor}`}
            alt="Show Tasks Icon"
          />
          <p>Show Tasks</p>
        </div>
        <div
          className={`sidebar-content-item ${activeItem === 'add_task' ? 'active' : ''}`}
          onClick={() => handleItemClick('add_task', '/add_task')}
        >
          <img
            src={`https://img.icons8.com/?size=100&id=84991&format=png&color=${iconColor}`}
            alt="Add Task Icon"
          />
          <p>Add Task</p>
        </div>
        
        <div
          className={`sidebar-content-item ${activeItem === 'completed_tasks' ? 'active' : ''}`}
          onClick={() => handleItemClick('completed_tasks', '/completed_tasks')}
        >
          <img
            src={`https://img.icons8.com/?size=100&id=101339&format=png&color=${iconColor}`}
            alt="Completed Tasks Icon"
          />
          <p>Completed Tasks</p>
        </div>
        <div
          className={`sidebar-content-item ${activeItem === 'i_gave_up' ? 'active' : ''}`}
          onClick={() => handleItemClick('i_gave_up', '/i_gave_up')}
        >
          <img
            src={`https://img.icons8.com/?size=100&id=WfM7E318Wpsk&format=png&color=${iconColor}`}
            alt="I Gave Up Icon"
          />
          <p>I gave up</p> 
        </div>
      </div>
    </div>
  );
}
