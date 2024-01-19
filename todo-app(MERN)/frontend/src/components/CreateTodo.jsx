import { useState } from "react"

export function CreateTodo(){
    const [title , updateTitle]= useState("");
    const [desc , updateDesc]= useState("");


    return (<div>
        <input onChange={function(e){
            updateTitle(e.target.value) ;
        }

        }  type="text"   placeholder="Title"></input>
        <input   onChange={function(e){
            updateDesc(e.target.value) ;
        }

        }   type="text" placeholder="Description"></input>

        <button onClick={async()=>{
            fetch("http://localhost:3000/todos",{
                method: 'POST',
                headers: {
                    'content-type':'application/json' 
                },
                body: JSON.stringify({
                title: title,
                description: desc,
              })
            } )
                .then(async (res)=>{
                    const json = await res.json();
                    alert("todo added sucessfully");
                })
        }
            
        }>Add Todo</button>

    </div>)
}