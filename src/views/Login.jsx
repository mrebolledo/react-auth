import React, {useState, useContext} from 'react'
import { AppContext } from '../context/AppContext'
import httpClient from '../util/httpClient'
import { useAuth } from '../context/AuthContext'

function Login() {
    const {setLoadingMessage, setErrorMessage, setSuccessMessage} = useContext(AppContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, login } = useAuth()

    const loginUser = async () => {
        setLoadingMessage("login in...")
        setErrorMessage(false)
        setSuccessMessage(false)
        const resp = await httpClient.post("/login", {
            email, password
        }).then((response) => {
            setLoadingMessage(false)
            setSuccessMessage("logged in")
            login(response.data.id)
        }).catch((err) => {
            setLoadingMessage(false)
            setErrorMessage(err.response.data.error)
        })
    }

    return (
        <div className="p-4">
            <form>
                <div className="form-group">
                    <label  className="form-label">Email</label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="form-control"  required />
                </div>
                <div className="form-group">
                    <label  className="form-label">Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control"  required />
                </div>
                <button type="button" onClick={() => {loginUser()}} className="btn bg-primary w-24 text-white">Login</button>
            </form>
        </div>
    )
}

export default Login
