import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import { Component } from 'react';

class App extends Component { 
  constructor(){
    super();
    this.state={
      newItem: "",
      todoItems: [
        {title: 'Mua bim bim', isCompleted: true},
        {title: 'Di da bong', isCompleted: false}, 
        {title: 'Di cho', isCompleted: true}
      ]
    };

    this.onKeyUp =this.onKeyUp.bind(this);
    this.onChange =this.onChange.bind(this);
  }

  onItemClick(item){

    const isCompleted = item.isCompleted;
    const {todoItems, newItem} =this.state;
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

  onKeyUp(event){
    if(event.keyCode===13)
    {
      let text = event.target.value;
      if(!text){
        return;
      }
      text=text.trim();
      this.setState({
        newItem:"",
        todoItems:[
          {title: text, isCompleted: false},
          ...this.state.todoItems
        ]
      });
    }
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    })
  }

  render(){
    const {todoItems, newItem} =this.state;

    return (
      <div className="App">
        <div className="Header">
          <img src="https://img.icons8.com/ios/2x/check-all.png" width="32" height="32" ></img>
          <input type="text" 
          value={newItem} 
          onChange={this.onChange}
          placeholder="Add a new item" onKeyUp={this.onKeyUp}></input>
        </div>
        {
          todoItems.length>0 && todoItems.map((item, index)=><TodoItem key={index} 
            item={item} 
            onClick={this.onItemClick(item)}></TodoItem>)
        }
        {
          todoItems.length==0 && 'Nonthing here'
        }
      </div>
    );
  }
}

export default App;
