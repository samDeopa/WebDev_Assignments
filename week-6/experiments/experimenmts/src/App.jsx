import { react, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let counter = 4;
function App() {
  
  // useEffect(()=>{
  //   fetch("https://sum-server.100xdevs.com/todos").
  //     then( async res=>{
  //       let json = await res.json();
  //       console.log(json);
  //       setTodos(json.todos);
  //     })
  // },[])
  const [count, setCount] = useState(0);
  const [sum , setSum] = useState(0);
  return (
    
    <>
      <input onChange={(event)=> {const n =parseInt (event.target.value);console.log(n); setSum(((n)*(n+1))/2)}} type='number'></input>
      <p>the sum is {sum}</p>
      <button onClick={()=>setCount(count+1)} >count is {count}</button>
      
     
    </>
     
    
  )
  function Todo({id}){

    const [todo, setTodo] = useState([])
    useEffect(()=>{fetch("https://sum-server.100xdevs.com/todo?id="+id).
    then(async res=>{
      console.log("hi")
      const json =await res.json();
      console.log(json);
      setTodo(json.todo);

    })}, [id]);
    

    return <div >
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
    </div>
  }
  
  function CardWrapper({children}){
    console.log(children);
    return <div style={{border: "2px solid white"}}>
      {children}
    </div>
  }
  
}

export default App
