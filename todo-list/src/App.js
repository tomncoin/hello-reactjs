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
  }

  onItemClick(item){

    const isCompleted = item.isCompleted;
    const {todoItems} =this.state;
    const index = todoItems.indexOf(item);

    return (event)=>{
      //console.log(item);
      this.setState({
        todoItems:[
          ...todoItems.slice(0, index),
          {
            ...item,
            isCompleted: !isCompleted
          },
          ...todoItems.slice(index+1)
        ]
      });
    };
  }

  render(){
    return (
      <div className="App">
        {
          this.state.todoItems.length>0 && this.state.todoItems.map((item, index)=><TodoItem key={index} 
            item={item} 
            onClick={this.onItemClick(item)}></TodoItem>)
        }
        {
          this.state.todoItems.length==0 && 'Nonthing here'
        }
      </div>
    );
  }
}

export default App;
