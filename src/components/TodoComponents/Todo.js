import React from 'react'

const Todo = props => {
    console.log("this is props on Todo.js ", props)
    return (
        <div 
        onClick={() => props.toggleItem(props.item.id)}
        className={`item${props.item.completed ? " completed" : ""}`}
        >
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo