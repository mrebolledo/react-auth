import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Authenticated(props) { 
    const { user } = useAuth()
    
    if (!user) {
        return <Navigate to="/login" />
    } 
    console.log(props)
    return props.children
}

export default Authenticated
