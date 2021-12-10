import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Accordion heading="Heading">
          Demo adsad  
        </Accordion> 
      </div>
    );
  }
}

export default App;
