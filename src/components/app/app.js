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
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ]
    }
    
    createTodoItem(label) {
        return {
            label,
            done: false,
            important: false,
            id: this.maxId++
        }
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
        const newItem = this.createTodoItem(text)

        this.setState(({ todoData }) => {
            const newTodoData = [...todoData, newItem]

            return {
                todoData: newTodoData
            }
        })
    }
    
    onToggleDone = (id) => {
        console.log('onToggleDone', id)
    }
    onToggleImportant = (id) => {
        console.log('onToggleImportant', id)
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
                    onToggleDone={ this.onToggleDone }
                    onToggleImportant={ this.onToggleImportant }
                />
                <AddedItem onAddedItem={ this.addedItem }/>
            </div>
        )
    }
}

