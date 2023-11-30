import React, { useState, useEffect, createContext } from 'react'


// 1. Create a Context
export const UserContext = createContext()


// 2. Create a Context Provider
export function UserProvider({ children }) {
    
    const [ user, setUser ] = useState(null)
    const [ loadingUser, setLoadingUser] = useState(true)
    const server = process.env.REACT_APP_SERVER_URL;

    const fetchUserData = async (userId) => {
        try {
            const response = await fetch(`${server}/user/settings/${userId}`)

            if (response.ok) {
                const userData = await response.json()
                setUser((currentUser) => ({ ...currentUser, settings: userData.settings }));
            } else {
                console.log("error fetching user data")
            }
        } catch (err) {
            console.log('Fetch Error', err)
        } finally {
            setLoadingUser(false)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        const username = localStorage.getItem('username')
        const userId = localStorage.getItem('userId')
    
        if (token && username && userId) {
            setUser({ token, username, userId });
            fetchUserData(userId)
          
        } else {
            setUser(null)
        }
        setLoadingUser(false)
    }, []);



    const logout = (navigateFunction) => {
        localStorage.clear()
        setUser(null)
        navigateFunction('/logreg')
    };
    if (loadingUser) {
        return <div>Loading...</div>;
    }

    return (
        <UserContext.Provider value={{ user, setUser, logout, loadingUser, fetchUserData }}>
            {children}
        </UserContext.Provider>
    )
}




