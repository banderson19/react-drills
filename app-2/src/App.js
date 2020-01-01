import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: ['pizza', 'salad', 'roll', 'green beans']
    };
  }

  render() {
    let foodsToDisplay = this.state.foods.map((e, index) => {
      return <h2 key={index}>{e}</h2>
    })
    return <div className="App">{foodsToDisplay}</div>
  } 
}

export default App;

