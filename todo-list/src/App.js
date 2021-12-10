import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.todoItems=[
      {title: 'Mua bim bim', isCompleted: true},
      {title: 'Di da bong', isCompleted: false}, 
      {title: 'Di cho', isCompleted: true}
    ]
  }
  render(){
    return (
      <div className="App">
        {
          this.todoItems.map((item, index)=><TodoItem key={index} item={item}></TodoItem>)
        }
      </div>
    );
  }
}

export default App;
