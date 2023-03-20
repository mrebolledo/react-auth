import React from 'react';
import TopLink from './TopLink.jsx';
import LogoMini from '../assets/logo-mini.svg';
import { useAuth } from '../context/AuthContext.jsx';
const TopBar = () => {
    const { user, logout } = useAuth()

    return (
        <div className="flex shadow-md justify-between items-center px-4 py-2 bg-slate-50"> 
            <div className="flex items-center font-bold text-xl text-primary">
                <img src={LogoMini} alt="logo-mini" className="w-10 mr-4" /> Auth-Test
            </div>
            <ul className="flex">
                { !user && <TopLink 
                    to={"/login"}
                    caption={"Login"}
                /> }
                { !user && <TopLink 
                    to={"/register"}
                    caption={"Register"}
                />}
                
                { user &&  <TopLink 
                    to={"/"}
                    caption={"Welcome"}
                /> }

                { user &&  <button onClick={() => {logout()}} className="nav-link">Salir</button>}
            </ul>
        </div>
    )
}

export default TopBar