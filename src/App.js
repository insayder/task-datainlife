import React from 'react';
import MainTable from './component/table/index';
import Toolbar from './component/toolbar/';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <MainTable />
    </div>
  );
}

export default App;
