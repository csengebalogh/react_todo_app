import React, { useState, useEffect } from "react"
import './App.css';
import { Form, TodoList } from "./components"

function App() {




  //States
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([]) // u can only pass it down to components, no upwards
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  /* usestates have to be on the very top op the app in order for us to be able
   to pass props down to components */

  //useeffect
   useEffect(() => {
     filterHandler()
  }, [todos, status])

   //Functionalities

   const filterHandler = () => {
     switch(status) {
       case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break
        default:
          setFilteredTodos(todos)
          break
     }
   }

  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
        
      </header>
      <Form 
          todos={todos}
          setTodos={setTodos} 
          inputText={inputText} 
          setInputText={setInputText}
          setStatus={setStatus}
          
       />
      <TodoList 
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
