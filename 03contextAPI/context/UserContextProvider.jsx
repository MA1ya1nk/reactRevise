import React from "react";
import UserContext from "./UserContext"

const UserContextProvider=({children}) =>{
    const [user,setUser]=React.useState(null)
    return(
        // now we can pass user ans setUser anywhere just by importing UserContextProvider
        <UserContext.Provider value={{user,setUser}}>  
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider