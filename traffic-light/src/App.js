import logo from './logo.svg';
import './App.css';
import TrafficLight from './components/TrafficLight';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
  }

  render(){
    // const {currentColor}=this.state;
    return (
      <div className="App">
        {
          <TrafficLight></TrafficLight>
        }
      </div>
    );
  }
}

export default App;
