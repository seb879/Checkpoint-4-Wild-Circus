import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Description from './Components/Description';
import Artist from './Components/Artist';
import Store from './Components/Store';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Description />
      <Artist />
      <Store />
    </div>
  );
}

export default App;
