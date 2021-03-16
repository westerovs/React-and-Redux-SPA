import React from 'react'

const TodoItem = ({
                      label,
                      important = false,
                      complited = false,
                  }) => {
    
    const style = {
        color: important ? `tomato` : `black`,
        complited: complited ? `line-through` : `inherit`,
    }
    
    return <span style={style}>{ label }</span>
    
}

export default TodoItem
