import React, {useContext} from 'react'
import UserContext from '../../context/UserContext'

function Profile () {
    const {user}=useContext(UserContext)
  if(!user) return <div>please login</div>
  return <div>welcome to {user.Username} and password {user.Password}</div>
}

export default Profile