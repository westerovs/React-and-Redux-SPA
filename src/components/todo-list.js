import React from 'react'

import TodoItem from './todo-list-item.js'

const TodoList = ({todos}) => {
    
    const element = todos.map(it => {
        return <li><TodoItem {...it}/></li>
    })
    
    return (
        <ul>
            { element }
        </ul>)
}

export default TodoList
