import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import './style.css'



class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(state => {
            const newList = state.todos.map(item=>{
                if(id === item.id){
                    return ({
                        ...item,
                        completed: !item.completed
                    });
                }
                return item
            }    
        
            )
            return({
                todos: newList
            })
        })
        console.log(id)
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App