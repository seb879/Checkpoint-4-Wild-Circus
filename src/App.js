import React, { Component } from 'react';
import './App.scss';
import NavBar from './Components/NavBar';
import Description from './Components/Description';
import Artist from './Components/Artist';
import Store from './Components/Store';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
    <div className="App">
      <NavBar />
      <Description />
      <Artist />
      <Store />
      <Footer />
    </div>
  );
}
}

export default App;
