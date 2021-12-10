import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.todoItems=[
      'Mua bim bim', 'Di da bong', 'Di cho'
    ]
  }
  render(){
    return (
      <div className="App">
        {
          this.todoItems.map((item, index)=><TodoItem key={index} title={item}></TodoItem>)
        }
      </div>
    );
  }
}

export default App;
