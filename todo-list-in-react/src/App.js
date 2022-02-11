import './App.css'

// Import all Hooks
import React,  {useState, useEffect, useRef} from 'react'


// Main Component 
function App() {

  // Binding reference hook
  const todoText = useRef()

  const [todos,  setTodos] = useState([])

  // Side Effects Lifecycle
  useEffect(() => {
    const existingTodos = localStorage.getItem('todos')
    setTodos(existingTodos ? JSON.parse(existingTodos) : [])

  }, []) 


  // Events
  function addTodo(event) {
    
    const next = [...todos, todoText.current.value ]
    setTodos(next)
    if(setTodos === next)
    {
      console.log('Cannot input same data')
    }
    localStorage.setItem('todos', JSON.stringify(next))
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (<li key={index}>{todo}</li>))}
      </ul>

      <form onSubmit={addTodo}>
        <input ref={todoText} type="text" placeholder="What needs to be done?" />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  )
}

export default App
