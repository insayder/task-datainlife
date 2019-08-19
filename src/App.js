import React, { Fragment } from 'react';
import MainTable from './component/table/index';
import Toolbar from './component/toolbar/';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="App">
        <Toolbar />
        <MainTable />
      </div>
    </Fragment>
  );
}

export default App;
