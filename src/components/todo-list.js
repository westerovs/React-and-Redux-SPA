import React from 'react'

import TodoItem from './todo-list-item.js'

const TodoList = ({ todos }) => {
    
    const element = todos.map(item => {
        
        const { id, ...itemProps } = item
        
        return (
            <li key={ id }>
                <TodoItem { ...itemProps } />
            </li>
        )
    })
    
    return (
        <ul>
            { element }
        </ul>)
}

export default TodoList
