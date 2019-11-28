import React from "react"

function TodoItem(props) {
    const styles = {}
    if(props.item.completed){
        styles.color = 'gray';
        styles.textDecoration = 'line-through';
        styles.fontWeight = 300;
        styles.fontStyle = 'italic'
    }
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={styles}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem