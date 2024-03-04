export function Card({users}){
    return <div>
        {users.map((user)=>{
        return <div>
        <h1>{user.name}</h1>
        <p> {user.summary}</p>
        <h2>interests</h2>
        <ul>
            {user.interests.map((interst)=>{
                return <li>{interst}</li>
            })}
        </ul>
        <button href = {user.linkedin}>Linkedin</button>
        <button href = {user.twitter}>Twitter</button>
        </div>
    })}
        
    </div>
}