import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="avatar" />
          <Landing />
        </header>
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
