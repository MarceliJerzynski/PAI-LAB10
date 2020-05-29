import React from "react"

class ToDoList extends React.Component {
    constructor() {
        super()

        this.completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
    }

    
    render() {        
        return (
            <div className="hider">
                <input 
                type="checkbox" 
                checked={this.props.item.checked} 
                onChange={() => this.props.toggleVisibility()}
            />
             <p style={this.props.item.checked ? this.completedStyle: null}>Hide Completed</p>
            </div>
        )    
    }
}

export default ToDoList