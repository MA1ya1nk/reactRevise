import React, {useState,useContext} from 'react'
import UserContext from '../../context/UserContext'

function Login ()  {
    const [Username, setUsername] = useState()
    const [Password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)  // userContext is provided bcoz multiple context might be there so we have to mention which one is accesing

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({Username,Password})
    }
  return (
    <div>
    <h2>Login</h2>
    <input type="text" placeholder='username' value={Username} onChange={(e)=>{setUsername(e.target.value)}} />
    <input type="password" placeholder='password' value={Password} onChange={(e)=>{setPassword(e.target.value)}} />
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login