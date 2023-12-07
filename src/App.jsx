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
  }; 

  return (
    <>
      <form className="new-item-form">
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
          <li>
            <label>
              <input type="checkbox"/>
              Item 1  
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
          <li>
            <label>
              <input type="checkbox"/>
              Item 2  
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
        </ul>
      </>
  )
}