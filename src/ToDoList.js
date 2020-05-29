import React from "react"
import TodoItem from "./TodoItem"
import HideCompleted from "./HideCompleted.js"

class ToDoList extends React.Component {
    
    render() {
        const todoItems = this.props.todos.map(item => <TodoItem key={item.key} item={item} handleChange={this.props.handleChange}/>)
        
        return (
            <div className="todo-list">
                <HideCompleted item = {this.props.hider} toggleVisibility = {this.props.toggleVisibility}/>
                {todoItems}
            </div>
        )    
    }
}

export default ToDoList