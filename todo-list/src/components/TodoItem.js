import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';

class TodoItem extends Component{
   
    render(){
        
        const {item, onClick}=this.props;
        let checkImg ="https://img.icons8.com/carbon-copy/2x/checked.png";
        if(item.isCompleted){
            checkImg ="https://img.icons8.com/color-glass/2x/checked.png";
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

TodoItem.propTypes={
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool
    }),
    onClick: PropTypes.func
};

export default TodoItem;