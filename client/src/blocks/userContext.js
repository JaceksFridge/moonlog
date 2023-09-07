import React, { useState, useEffect, createContext } from 'react'


// 1. Create a Context
export const UserContext = createContext()


// 2. Create a Context Provider
export function UserProvider({ children }) {
    
    const [ user, setUser ] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        const username = localStorage.getItem('username')
        const userId = localStorage.getItem('userId')
    
        if (token && username && userId) {
          setUser({ token, username, userId });
        }
    }, []);

    const logout = (navigateFunction) => {
        localStorage.clear()
        console.log("Logging OUT")
        setUser(null)
        navigateFunction('/logreg')
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    )
}




