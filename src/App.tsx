import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems';
import { TaskInput } from './components/TaskInput';
function App() {
  return (<>
    <div><TaskInput/></div>
    <div><ListItems/></div>
    </>
  );
}

export default App;
