import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/app-header.js'
import SearchPanel from './components/search-panel.js'
import TodoList from './components/todo-list.js'

const root = document.getElementById('root')


const App = () => {
    
    const todoData = [
        {label: 'Выучить реакт', important: false, id: 1},
        {label: 'Выпить кофе', important: false, id: 2},
        {label: 'не отвлекаться', important: true, id: 3},
    ]
    
    return (
        <div>
            <Header/>
            <SearchPanel/>
            <TodoList todos={ todoData }/>
        </div>
    )
}

ReactDom.render(<App />, root)

