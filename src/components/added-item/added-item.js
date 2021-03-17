import React, { Component } from 'react';
import './added-item.css';

export default class AddedItem extends Component {
    
    
    render() {
        const { onAddedItem } = this.props
        
        return (
            <div className="todo__added">
                <input
                    type="text"
                    className="todo__added-input"
                    placeholder="enter task..."
                />
                <button onClick={ () => onAddedItem('hello') } className="todo__added-btn">
                    Add
                </button>
            </div>
        );
    }
}

