import { type JSX } from 'react'
import { Navigate } from 'react-router'

const protectedRoutes = ({children}: {children: JSX.Element}) => {
    const token = localStorage.getItem('token')
    const isLoggedIn = !!token 

    if (isLoggedIn) {
        alert("Fitur ini khusus untuk pengguna login")
        return <Navigate to={"/"} />
    }

    return children

}

export default protectedRoutes