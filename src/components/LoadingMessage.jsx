import React from 'react'
import { ImSpinner2 } from 'react-icons/im'
const LoadingMessage = (props) => {
  return (
    <div className="flex w-full bg-sky-400 p-2 mb-4 rounded-md text-white">
        <ImSpinner2 size={25} className="mr-4 loading-icon"/>
        {props.message}
    </div>
  )
}

export default LoadingMessage