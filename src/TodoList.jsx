import { TodoItem } from "./TodoItem"


export function TodoList({ todos, toggleTodo,deleteTodo }) {
    return (
        <ul className="list">

            {todos.length === 0 && "No todos"} {/* //short circuiting to display if there are no todos. */}
            {todos.map(todo => {


            {/*Note: I could use the spread operator here on todos to clean things up */}
                return (
                    <TodoItem id={todo.id}
                     completed={todo.completed}
                      title={todo.title}
                       key={todo.id}
                       toggleTodo={toggleTodo}
                       deleteTodo={deleteTodo}
                     />
                )
            })}
        </ul>
    )
}