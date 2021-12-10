import logo from './logo.svg';
import './App.css';
import TrafficLight from './components/TrafficLight';
import { Component } from 'react';

const RED=0;
const ORANGE=1;
const GREEN=2;

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      initial: 'state',
      currentColor: GREEN  
    };

    // setInterval(()=>{
    //     this.setState({currentColor: this.getNextColor(this.state.currentColor)}); 
    // },this.trafficDelay(this.state.currentColor));

    this.clickMe = this.clickMe.bind(this);
    this.clickRed = this.clickRed.bind(this);
  }

  
  getNextColor(color){
    switch(color){
        case RED:
            return ORANGE;
        case ORANGE:
            return GREEN;
        default:
            return RED;

    };
  }

  trafficDelay = (color) => {
    switch (color) {
       case 0: return 5000;
       case 1: return 500;
       default: return 10000;
    }
 }

  clickMe () {
    this.setState({
      currentColor: this.getNextColor(this.state.currentColor)
    });
   }

  clickRed () {
    this.setState({
      currentColor: RED
    })
   }

  componentDidMount() {
    this.timerID = setInterval(()=>{
      console.log(this.state.currentColor+" "+ this.trafficDelay(this.state.currentColor));
      this.setState({currentColor: this.getNextColor(this.state.currentColor)}); 
    },this.trafficDelay(this.getNextColor(this.state.currentColor)));
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render(){
    const {currentColor}=this.state;
    return (
      <div className="App">
        {
          <TrafficLight currentColor={currentColor}></TrafficLight>
        }
        <div>
          <button onClick={this.clickMe}>click</button>
          <button onClick={this.clickRed}>red</button>
        </div>
      </div>
    );
  }

  
}


export default App;
