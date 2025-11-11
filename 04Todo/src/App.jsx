import { useState } from 'react'
import { TodoProvider } from './contexts';
import './App.css'
import { useEffect } from 'react';
import { TodoForm, TodoItem } from './components';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo=(todo)=>{
    setTodos((prev)=> [{id: Date.now(),...todo}, ...prev])    //  {id: Date.now(),...todo} this add new todo into state todos    // prev take all previous values  and ...prev put all those values in setTodo
  }

  const updateTodo=(id, todo)=>{
      setTodos((prev) => prev.map((allTodo) =>(allTodo.id===id? todo : allTodo))) // find all prev todo and then apply loop to find todo with id = id and change into new todo if find otherwise remain unchanged ie , push allTodo
  }

  const deleteTodo = (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id)) // when todo.id not match so it will add into setTodos and when match it filter it out
  }

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  //  local storage has just two methods set items and get items   
  // just one point to keep in mind is it store data in string format so must convert in json format before use

  useEffect(() => {
    // here we can access local storage directly as react is browser based(client side rendering)
    //   but not in next js as it is server side rendering so cant access browser local storage directly

    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if(storedTodos && storedTodos.length>0) setTodos(storedTodos)
  }, [])
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (  // use {} and then use return or directly use parenthesis () to return jsx
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />  
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>        
  )
}

export default App
