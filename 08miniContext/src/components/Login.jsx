import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername] = useState('')
    const [pass, setpass] = useState('') 


    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,pass})
    }

    return (
    <div>
        <h1>Login</h1>
        <div class='input'>
        <input type='text' 
        placeholder='username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        <input type='text'
        value={pass}
        placeholder='password'
        onChange={(e)=>setpass(e.target.value)}
        />
        </div>
        <button onClick={handleSubmit}>Submit</button>
    </div>
)
}

export default Login