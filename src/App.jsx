import {useState} from "react"
import "./styles.css"

//changing state causes components to reRender

export default function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault() //prevent the page from refreshing onSubmit

    setTodos((currentTodos) => {
      return [
        ...currentTodos, // using spread operator to create new array
        {id: crypto.randomUUID(), 
          title: newItem ,
          completed: false},
      ]
    })
    setNewItem("") // resetting newItem to empty string to clear input
  }; 

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
      <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
              <label htmlFor="item">New Item</label>
              <input 
              value={newItem}
              onChange={e => setNewItem(e.target.value)} // getting the value of the input, setting as newItem(reRendering component)
               type="text" 
               id="item"/>
            </div>
            <button className="btn">Add</button>
        </form>
        <h1 className="header">ToDo List</h1>
        <ul className="list">
        
          {todos.length === 0 && "No todos"} {/* //short circuiting to display if there are no todos. */}
          {todos.map(todo =>{ 
              return (
                 <li key={todo.id}>
                  <label>
                    <input type="checkbox" 
                    checked={todo.completed}
                    onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                    {todo.title}  
                  </label>
                  <button className="btn btn-danger"
                   onClick={() => deleteTodo(todo.id)}>Delete</button> 
                </li>
              )
          } )}
        </ul>
      </>
  )
}