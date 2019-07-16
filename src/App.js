import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Description from './Components/Description';
import Artist from './Components/Artist';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Description />
      <Artist />
    </div>
  );
}

export default App;
