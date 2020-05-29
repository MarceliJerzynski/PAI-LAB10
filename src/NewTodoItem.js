import React from "react"

class NewTodoItem extends React.Component {
    constructor() {
        super()
        this.myRef = React.createRef();
    }

    keyPressed = event => {
        if (event.key === "Enter") {
          this.addTodo()
        }
    }

    onClick = e => {
        e.preventDefault();
        this.addTodo()
    }

    addTodo() {
        this.props.addTodo(this.myRef.current.value) 
        this.myRef.current.value = ""
        this.myRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    
    render() {        
        return (
            <div className="newToDo">
                <br/>
                <input type="textarea" ref={this.myRef} onKeyPress={this.keyPressed}></input>
                <button onClick={this.onClick}>Add</button>
            </div>
        )    
    }
}

export default NewTodoItem