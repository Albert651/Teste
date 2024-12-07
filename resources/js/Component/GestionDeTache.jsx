import React, { useState } from 'react';
import Headers from './Page/Headers';
import Sidebar from './Page/Sidebar';
import './Acceuil.css'
import Tache from './Tache';

function GestionDeTache() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [newTasks, setNewTasks] = useState([]);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleNewTaskAdded = (tasks) => {
    setNewTasks(tasks);
  };

  return (
    <div className='acceuil'>
      <Headers toggleSidebar={toggleSidebar} newTasks={newTasks} />
      
      <div className="d-flex">
        <Sidebar isVisible={isSidebarVisible} style={{height:'45vh'}}/>
        
        <div className="d-flex justify-content-center align-items-center" style={{marginLeft: isSidebarVisible ? '250px' : '0', width: isSidebarVisible ? 'calc(150% - 300px)' : '100%',marginTop: '73px'}}>
          <Tache onNewTaskAdded={handleNewTaskAdded} />
        </div>
      </div>
    </div>
  );
}

export default GestionDeTache;