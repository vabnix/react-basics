import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Header from './Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <h1>Hi! I am new to React</h1>
        <p>This is really working!</p>
        <Person name="Vaibhav" age="36" />
        <Person name="Pallabi" age="34" />
        <Person name="Aum" age="1" />
      </div>
    );
  }
}

export default App;
