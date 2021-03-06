import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

class App extends Component {
  
  render() {
    return (
      <div className="App background-img">
        <NavBar />
        <Landing />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
