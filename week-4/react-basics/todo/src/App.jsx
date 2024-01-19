import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {title: 'get to the gym' , desciption :'go to the gym and hit legs', completed:'false'},
    {title :'get groceries', desciption : 'get potato, tomato, onine, pasta', completed:'false'}
  ])

  return (
   <div>
    <Todo title='sam'  desciption='hello'></Todo>
   </div>
  )
  function Todo(props){
    return (<div>
      <p>{props.title}</p>
      <p>{props.desciption}</p>
      <button>Done</button>
    </div>)
  }
}

export default App
