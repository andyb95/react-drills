import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      favDjs: ["BTSM", 'Illenium', 'Nghtmre', 'Rezz', 'Zeds Dead'],
      filtered: ''
    }
  }

  handleChange(filter){
    this.setState({ filtered: filter})
  }

  render() {
    let favDjDisplay = this.state.favDjs.filter((element, index) => {
      return element.includes(this.state.filtered)
    })
    .map((element, index) => {
      return <h2 key ={index}>{element}</h2>
    })


    return (
      <div className="App">
        <input onChange = {e => this.handleChange(e.target.value)} type="text"/>
        {favDjDisplay}
      </div>
    );
  }  
}

export default App;
