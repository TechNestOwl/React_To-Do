import { useState } from "react"


export function NewTodoForm(props){
    props.onSubmit
  const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault() //prevent the page from refreshing onSubmit
        if(newItem === "" ) return {/* Check to see if new item is equal to empty string */}
        props.onSubmit(newItem)

        setNewItem("") // resetting newItem to empty string to clear input
      }; 
    return (

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
    )
}