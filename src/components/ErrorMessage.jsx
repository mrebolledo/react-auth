import React from 'react'

const ErrorMessage = (props) => {
    return (
        <div className="w-full bg-red-400 p-2 mb-4 rounded-md text-white">
            <span className="font-bold mr-3">Error!</span> {props.message}
        </div>
    )
}

export default ErrorMessage