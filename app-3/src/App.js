import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      foods: ['pizza', 'salad', 'roll', 'green beans']
    }
  }

  handleChange(filter) {
    this.setState({ filterString: filter});
  }
  
  render () {
    let foodsToDisplay = this.state.foods
      .filter((e, index) => {
        return e.includes(this.state.filterString)
      })
      .map((e, index) => {
      return <h2 key={index}>{e}</h2>
    })

    return (
      <div className="App">
        <input onChange = { e => this.handleChange(e.target.value)} type='text'/>
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
