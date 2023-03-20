import React from 'react';
import { NavLink } from "react-router-dom";

const TopLink = ({to,  caption}) => {
    const activeClassName = "nav-link bg-primary text-white transition duration-300"
    const defaultClassName = "nav-link"
    return (
        <NavLink 
            to={to} 
            className={
                ({ isActive }) =>
                    isActive ? activeClassName : defaultClassName
                }
        >
        { caption }
        </NavLink>            
                
    )
}

export default TopLink