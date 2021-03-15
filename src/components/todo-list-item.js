import React from 'react'

const TodoItem = ({
                      label,
                      important = false,
                      complited = false,
                  }) => {
    
    const color = important ? `tomato` : ``
    const isComplited = complited ? `line-through` : ``
    
    return <span style={ {color, textDecoration: isComplited} }>{ label }</span>
    
}

export default TodoItem
