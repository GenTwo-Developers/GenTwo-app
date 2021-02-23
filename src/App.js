import React from 'react';
import './style/template/App.css';
import ControlBar from './js/views/components/block/control-bar.js';
import Header from './js/views/components/block/header.js';
import Contents from './js/views/components/block/contents.js';

function App() {
  return(
    <div className="App">
      <Header/>
      <Contents/>
      <ControlBar/>
    </div>
  );
}

export default App;
