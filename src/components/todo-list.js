import React from 'react'

import TodoItem from './todo-list-item.js'

const TodoList = () => {
    return (
        <ul>
            <li><TodoItem label="Выучить реакт" important/></li>
            <li><TodoItem label="Выпить кофе"/></li>
            <li><TodoItem label="Стать миллионером" complited/></li>
        </ul>
    )
}

export default TodoList
