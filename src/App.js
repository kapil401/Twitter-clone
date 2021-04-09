import './App.css';
import  Sidebar from './Sidebar.js';
import Feed from './Feed'
import Widgets from './Widgets';
// import {Router} from 'react-router-dom'

function App() {
  return (
    
    <div className="app">
      <Sidebar />

      <Feed />
      <Widgets />
    </div>
    
  );
}

export default App;
