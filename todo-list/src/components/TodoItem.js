import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component{
   
    render(){
        
        const {item, onClick}=this.props;
        let checkImg ="https://cdn-icons-png.flaticon.com/128/87/87932.png";
        if(item.isCompleted){
            checkImg ="https://cdn-icons.flaticon.com/png/128/2251/premium/2251677.png?token=exp=1639125883~hmac=568c970f958be48674380a2884c01a64";
        }

        let className="TodoItem";
        if(item.isCompleted){
            className += " TodoItemDone";
        }
        return(
            <div className={className}>
                <img  onClick={onClick} src={checkImg} width="32" height="32" />
                <p>{this.props.item.title}</p>
            </div>
        );
    };
}

export default TodoItem;