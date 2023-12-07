import {useState} from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import { TodoItem } from "./TodoItem"

//changing state causes components to reRender

export default function App(){
  const [todos, setTodos] = useState([])

  function addTodo(title){
    setTodos((currentTodos) => {
      return [
        ...currentTodos, // using spread operator to create new array
        {id: crypto.randomUUID(), 
          title,
          completed: false},
      ]
    })
  }
  

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo=> {
        if(todo.id === id){
          //todo.completed  = completed // ** immutable this will not work. 
          return {...todo, completed} //creating new todo state object and changing completed property
        }
        return todo // return current todo incase its not matching current ID 
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => { //grag all my currenttodos
      return currentTodos.filter(todo => todo.id !== id) // filter all todos except the one I want to delete
    })
  }
  

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
        <h1 className="header">ToDo List</h1>
        <TodoList todos={todos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo}/>
      </>
  )
}