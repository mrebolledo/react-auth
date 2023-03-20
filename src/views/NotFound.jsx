import React from 'react'
import { IoSad } from 'react-icons/io5'
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const NotFound = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center px-5">
            <div className="w-full md:w-1/2 p-5  text-white">
                <img src={logo} alt="Logo" className="mb-5"/>
                <div className="w-full bg-red-500 p-5 rounded-md">
                    <h1 className="text-4xl font-bold flex">
                        <IoSad className='mr-4' />
                        404!
                    </h1>
                    <p className='mt-2 italic'>Page not found!</p>
                </div>
                <div className="w-full flex py-4 justify-center">
                    <Link to="/" className='text-primary mr-5 underline'>Login</Link>
                    <Link to="/register" className="text-primary underline">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound