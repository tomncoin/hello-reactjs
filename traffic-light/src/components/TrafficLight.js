import React, {Component} from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED=0;
const ORANGE=1;
const GREEN=2;

class TrafficLight extends Component{
    constructor(){
        super();
        this.state={
          currentColor: GREEN  
        };

        setInterval(()=>{
            this.setState({currentColor: this.getNextColor(this.state.currentColor)});
            //console.log(this.currentColor);
        },2000);
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
    
    render(){
        // console.log('rendering...');

        return(
            <div className="TrafficLight">
                <div className={classNames('buld','red',{active: this.state.currentColor===RED})}></div>
                <div className={classNames('buld','orange',{active: this.state.currentColor===ORANGE})}></div>
                <div className={classNames('buld','green',{active: this.state.currentColor===GREEN})}></div>
            </div>
        );
    }
}


export default TrafficLight;