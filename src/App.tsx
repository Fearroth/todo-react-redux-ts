import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems';
import { TaskInput } from './components/TaskInput';
function App() {
  return (<div className='container'>
    <div className='header'>TODOS</div>
    <div className='taskInput'><TaskInput/></div>
    <div className='listItems'><ListItems/></div>
    </div>
  );
}

export default App;
