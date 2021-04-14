<<<<<<< Updated upstream
import React from 'react';
import './style/template/App.css';
import ControlBar from './js/views/components/block/control-bar.js';
import Header from './js/views/components/block/header.js';
import Contents from './js/views/components/block/contents.js';
=======
import logo from './logo.svg';
import './App.css';
import Header from './js/views/compornents/block/header';
>>>>>>> Stashed changes

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
