import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();

        this.state={
            count:0
        };
    }

    increase(){
        this.setState({
            count: this.state.count+1
        });

    }

    decrease(){
        this.setState({
            count: this.state.count-1
        });
    }

    componentDidMount(){
        console.log("Counter is mount");
    }

    componentDidUpdate(){
        console.log("Counter is update");

    }

    componentWillUnmount(){
        console.log("Counter is unmount");

    }

    render(){
        console.log("counter rendering...");
        return(
            <div>
                <button onClick={()=>this.decrease()}>-</button>
                <span>{this.state.count}</span>
                <button onClick={()=>this.increase()}>+</button>
            </div>

        );
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.count===nextState.count){
            return false;
        }
        return true;
    }
}

export default Counter;