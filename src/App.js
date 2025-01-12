import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import MainContentHeader from './MainContentHeader';
import MainContentBody from './MainContentBody';

function App() {
  console.log("Rendering App");  // Add a log here
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <MainContentHeader/>
          <MainContentBody/>
        </div>
      </div>
    </Router>
  );
}

export default App;
