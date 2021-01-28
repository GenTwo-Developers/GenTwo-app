import React from 'react';
import './style/App.css';
import ControlBar from './js/views/components/block/control-bar.js';
function App() {
  return(
    <div className="App">
      <div className="header"></div>
      <div className="contents"></div>
      <ControlBar/>
    </div>
  );
}

export default App;
