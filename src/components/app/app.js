import React, {Component} from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import AddedItem from '../added-item'
import ItemStatusFilter from '../item-status-filter'
import './app.css'

export default class App extends Component {
    
    maxId = 100
    
    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3},
        ]
    }
    
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const todoId = todoData.findIndex(item => item.id === id)
            const newTodoData = [
                ...todoData.slice(0, todoId),
                ...todoData.slice(todoId + 1)
            ]
    
            return {
                todoData: newTodoData
            }
        })
    }
    
    addedItem = (text) => {
        const newItem = {
            label: text,
            important: true,
            id: this.maxId++
        }

        this.setState(({ todoData }) => {
            const newTodoData = [...todoData, newItem]

            return {
                todoData: newTodoData
            }
        })
    }
    
    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={ 1 } done={ 3 }/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList
                    todos={ this.state.todoData }
                    onDeleted={ this.deleteItem }
                />
                <AddedItem onAddedItem={ this.addedItem }/>
            </div>
        )
    }
}

