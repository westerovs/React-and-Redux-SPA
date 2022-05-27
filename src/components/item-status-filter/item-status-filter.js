import React, { Component } from 'react'
import './item-status-filter.css'
import AppHeader from '../app-header';

export default class ItemStatusFilter extends Component {
    render() {
        const { filtered } = this.props
    
        return (
            <div className="btn-group">
                <button type="button"
                        onClick={ filtered }
                        data-filter="all"
                        className="btn btn-info">All</button>
                <button type="button"
                        onClick={ filtered }
                        data-filter="active"
                        className="btn btn-outline-secondary">Active</button>
                <button type="button"
                        onClick={ filtered }
                        data-filter="done"
                        className="btn btn-outline-secondary">Done</button>
            </div>
        )
    }
}
