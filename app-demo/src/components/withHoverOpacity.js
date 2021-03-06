import { Component } from "react";

export default function (WrappedComponent){
    return  class extends Component{
        constructor(props){
            super(props);
            this.state={
                isHovered: false
            };
        }

        onMouseEnter(){
            this.setState({
                isHovered: true
            });
        }

        onMouseLeave(){
            this.setState({
                isHovered: false
            });
        }

        render(){
            return(
                <div
                    style={{
                        opacity: this.state.isHovered?0.5:1
                    }}
                    onMouseEnter={this.onMouseEnter.bind(this)}
                    onMouseLeave={this.onMouseLeave.bind(this)}
                >
                    <WrappedComponent {...this.props}></WrappedComponent>
                </div>
            );
        }
    }
}