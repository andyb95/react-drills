import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {
      mySports: ['hockey', 'snowboarding', 'mtn biking', 'climbing']
    }
  }

  render() {
    let sportsToDisplay = this.state.mySports.map((element, index) => { 
      return <h2 key={index}>{element}</h2>
    })

    return <div className="App">{sportsToDisplay}</div>

  }
}

export default App;
