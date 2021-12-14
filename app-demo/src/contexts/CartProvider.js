import React,{Component} from "react";

import CartContext from "./CartContext";

export default class extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <CartContext.Provider value={5}>
                    {
                        this.props.children
                    }
                </CartContext.Provider>
            </div>
        )
    }
}