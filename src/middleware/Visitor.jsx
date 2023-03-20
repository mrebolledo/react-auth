import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Visitor(props) { 
    const { user } = useAuth()
    
    if (!user) {
        return props.children
    } 

    return <Navigate to="/" />
}

export default Visitor
