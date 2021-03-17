import React, { Component } from 'react';
import './added-item.css';

export default class AddedItem extends Component {
    state = {
        label: ''
    }
    
    onChange = (e) => {
        this.setState(({ label }) => {
            const value = e.target.value
    
            return {
                label: value
            }
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault()
        const { onAddedItem } = this.props
        
        onAddedItem(this.state.label)
        e.target.querySelector('.todo__added-input').value = ''
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
                    onChange={ this.onChange }
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

