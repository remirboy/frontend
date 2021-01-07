import React,{useEffect} from 'react';
import TodoList from './TodoList/TodoList'
import Context from './context'
import Loader from './Loader'
import Modal from './Modal/Modal'

const AddTodo = React.lazy(()=>import('./TodoList/AddTodo'))

function App() {
 
  function ToggleToDo(id){
    setTodos(todos.map(todo =>{
      if(todo.id===id)
        todo.completed=!todo.completed
      return todo 
    })
    )
  }

  function removeToDo(id){
    setTodos(todos.filter(todo=> todo.id!=id ))
  }

  function addToDo(title){
    setTodos(todos.concat([{
      title,
      id:Date.now(),
      completed:false
    }]))
  }
  const [todos,setTodos]= React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos =>
        setTimeout(()=>{
          setTodos(todos)
          setLoading(false)
        },
  2000)
  )},[])
  return (
    <Context.Provider value={{removeToDo}}>
   <div className="wrapper">
     <h1>React Tutorial</h1>
     <Modal/>
     <React.Suspense fallback={<p>Loading.....</p>}> 
     <AddTodo onCreate={addToDo}/>
     </React.Suspense>
     {loading&&<Loader/>}
     {todos.length ?(<TodoList todos={todos} onToggle={ToggleToDo}/>
     ) : (
       loading ? null : <p>No tasks</p>
     )}
   </div>
   </Context.Provider>
  );
}

export default App;