import React,{Component} from "react";

export const CartContext = React.createContext();

export class CartProvider extends Component{
    constructor(props){
        super(props);

        this.state = {
            quantity: 0,
            cartItems: []
        };

        this.updateQuantity = this.updateQuantity.bind(this);
        this.addToCart = this.addToCart.bind(this);

    }

    updateQuantity(){
        this.setState(
            {
                quantity: this.state.quantity + 1
            }
        );
        this.setState(
            {
                quantity: this.state.quantity + 1
            }
        );
    }

    addToCart(product){
        this.setState({
            cartItems: this.state.cartItems.concat(product)
        });
    }

    render(){
        return(
            <div>
                <CartContext.Provider value={
                   { 
                       quantity: this.state.quantity,
                       updateQuantity: this.updateQuantity,
                       addToCart: this.addToCart,
                       cartItems: this.state.cartItems,
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