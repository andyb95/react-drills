import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      input: ''
    }
    this.handleAddTask= this.handleAddTask.bind(this)
  }

  handleInputChange(val){
    this.setState({input: val})
  }

  handleAddTask(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render() {
    let list = this.state.list.map((element, index) =>{
      return <Todo key = {index} task={element}/>
    }) 
    return (
      <div className="App">

        <input value ={this.state.input} onChange = {e => this.handleInputChange(e.target.value)}/>

        <button onClick={this.handleAddTask}>Add</button>

        {list}
      </div>
    );
  }
}

export default App;
