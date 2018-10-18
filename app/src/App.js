import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Footer';
import Card from './components/Card';
import './App.css';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Card />
        <Footer />
      </div>
    );
  }
}

export default App;
