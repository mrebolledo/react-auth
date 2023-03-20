import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../util/useLocalStorage";

const AuthContext = createContext()

export const AuthProvider = (props) => {
    const [user, setUser] = useLocalStorage("user", null)
    const navigate = useNavigate()

    const login = async(data) => {
        setUser(data);
        navigate("/")
    }

    const logout = () => {
        setUser(null);
        console.log("login out")
        navigate("/login", {replace : true})
    }

    return  (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >    
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};
