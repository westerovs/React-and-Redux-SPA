import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/app-header.js'
import SearchPanel from './components/search-panel.js'
import TodoList from './components/todo-list.js'

const root = document.getElementById('root')

const App = () => {
    return (
        <div>
            <Header/>
            <SearchPanel/>
            <TodoList/>
        </div>
    )
}

ReactDom.render(<App />, root)

