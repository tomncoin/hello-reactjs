import React,{Component} from "react";

import CartContext from "./CartContext";

export default class extends Component{
    constructor(props){
        super(props);

        this.state = {
            quantity: 10
        };

        this.updateQuantity = this.updateQuantity.bind(this);
    }

    updateQuantity(){
        this.setState(
            {
                quantity: Math.random()
            }
        );
    }

    render(){
        return(
            <div>
                <CartContext.Provider value={
                   { 
                       quantity: this.state.quantity,
                       updateQuantity: this.updateQuantity
                   }
                }>
                    {
                        this.props.children
                    }
                </CartContext.Provider>
            </div>
        )
    }
}