import { type JSX } from "react"
import { Navigate } from "react-router"

const protectedRoutes = ({Children}: {Children: JSX.Element}) => {
    const token = localStorage.getItem('token')
    const isLoggedIn = !!token 

    if (isLoggedIn) {
        alert("Fitur ini khusus untuk pengguna login")
        return <Navigate to={"/"} />
    }

    return Children

}

export default protectedRoutes