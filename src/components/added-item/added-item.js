import React, { Component } from 'react';
import './added-item.css';

export default class AddedItem extends Component {
    state = {
        label: ''
    }
    
    onLabelChange = (e) => {
        this.setState(({ label: e.target.value }))
    }
    
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAddedItem(this.state.label)
        this.setState(({ label: '' })) // очистка
    }
    
    render() {
        
        return (
            <form
                className="todo__added"
                onSubmit={ this.onSubmit }>
                <input
                    type="text"
                    className="todo__added-input"
                    placeholder="enter task..."
                    onChange={ this.onLabelChange }
                    value={this.state.label}
                />
                <button
                    type="submit"
                    className="todo__added-btn">
                    Add
                </button>
            </form>
        );
    }
}

