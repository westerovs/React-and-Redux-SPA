import React, { Component } from 'react';
import './added-item.css';

export default class AddedItem extends Component {
    render() {
        const { onAddedItem } = this.props
        
        return (
            <button onClick={ () => onAddedItem('hl55o') } className="added">Add</button>
        );
    }
}

