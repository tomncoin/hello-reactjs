import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import { Component } from 'react';

class App extends Component { 
  constructor(){
    super();
    this.state={
      todoItems: [
        {title: 'Mua bim bim', isCompleted: true},
        {title: 'Di da bong', isCompleted: false}, 
        {title: 'Di cho', isCompleted: true}
      ]
    };

    this.onItemClick = this.onItemClick.bind(this.state.todoItems);
  }

  onItemClick(){
    // this.props.item.isCompleted = !this.props.item.isCompleted;
    console.log(this.index);
  }

  render(){
    return (
      <div className="App">
        {
          this.state.todoItems.length>0 && this.state.todoItems.map((item, index)=><TodoItem key={index} item={item} onClick={this.onItemClick}></TodoItem>)
        }
        {
          this.state.todoItems.length==0 && 'Nonthing here'
        }
      </div>
    );
  }
}

export default App;
