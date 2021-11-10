import React from "react"

function Todo (props) {
    const {
        text,
        id,
        todo,
        todos,
        setTodos
    } = props
    //Events
    const deleteHandler = () => {
       setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, //pass in whatever props the item has
                    completed: !item.completed
                }
            
            }
            return item
        }))
    }

    // toggle style based on state with ? : 

    return (
        <div className="todo">
            
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>
                {text}
            </li>
            
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>

        </div>
    )
}

export default Todo
