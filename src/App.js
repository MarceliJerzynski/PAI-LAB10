import React from "react"
import Header from "./Header"
import ToDoList from "./ToDoList"
import NewToDoItem from "./NewTodoItem"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
          todos: [],
          hider: {
            checked: false
          }
        }
        this.handleChange = this.handleChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.toggleVisibility = this.toggleVisibility.bind(this)
    }
  
    handleChange(key) {
      this.setState(prevState => {
          const updatedTodos = prevState.todos.map(todo => {
              if (todo.key === key) {
                  return {
                      ...todo,
                      completed: !todo.completed
                  }
              }
              return todo
          })
          return {
              todos: updatedTodos,
              hider: prevState.hider
          }
      })
  }

  addTodo(item) {
    this.setState(prevState => {
        const updatedTodos = prevState.todos.concat({
          key: prevState.todos.length,
          text: item,
          completed: false
        })
        return {
            todos: updatedTodos,
            hider: prevState.hider
        }
    })
}

toggleVisibility() {
    this.setState(prevState => {
      return {
        todos: prevState.todos,
        hider: {
          checked: !prevState.hider.checked
        }
      }
    })
}
    
    render() {        
        return (
          <div>
            <Header />
            <ToDoList todos = {
                         this.state.hider.checked ? this.state.todos.filter(todo => !todo.completed) : this.state.todos
                        } 
                      handleChange = {this.handleChange}
                      hider = {this.state.hider}
                      toggleVisibility = {this.toggleVisibility}/>
            <NewToDoItem addTodo = {this.addTodo}/>
          </div>
        )    
    }
}

export default App